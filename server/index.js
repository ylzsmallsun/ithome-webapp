var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

// var opn = require('opn')
var path = require('path')
const Koa = require('koa')
const staticFiles = require('koa-static')
const bodyParser = require('koa-bodyparser')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('../build/webpack.prod.conf')
  : require('../build/webpack.dev.conf')

const devMiddleware = require('koa-webpack-dev-middleware')
const hotMiddleware = require('koa-webpack-hot-middleware')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
// var autoOpenBrowser = !!config.dev.autoOpenBrowser

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = new Koa()
var compiler = webpack(webpackConfig)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
// app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware(compiler, {
  noInfo: true
  // publicPath: webpackConfig.output.publicPath,
  // reload: true
}))

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware(compiler))

// serve pure static assets
app.use(staticFiles(path.resolve(__dirname, '../static')))
const indexRouter = require('./routers/indexRouter')
indexRouter(app)
app.use(bodyParser())

// var uri = 'http://localhost:' + port

// var _resolve
// var readyPromise = new Promise(resolve => {
//   _resolve = resolve
// })

console.log('> Starting dev server...')
// devMiddleware.waitUntilValid(() => {
//   console.log('> Listening at ' + uri + '\n')
//   // when env is testing, don't need open it
//   if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
//     opn(uri)
//   }
//   _resolve()
// })
app.listen(port, () => {
  console.log('正在监听' + port)
})
// var server = app.listen(port)

// module.exports = {
//   ready: readyPromise,
//   close: () => {
//     server.close()
//   }
// }
