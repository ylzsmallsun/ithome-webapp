const fs = require('fs')
const path = require('path')

module.exports = {
  hello: async (ctx, next) => {
    // ctx.response.type = 'application/Json';
    ctx.response.body = {
      name: 'Hello vue & Koa'
    }
  },
  getNewsList: async (ctx, next) => {
    ctx.response.type = 'application/Json'
    let filePath = path.join(__dirname, '../service/newsList.json')
    // does't work and why?
    // await fs.readFile(filePath, 'utf-8', function (err, data) {
    //   if (err) {
    //     throw err
    //   } else {
    //     ctx.response.body = data
    //     console.log(data)
    //   }
    // })
    ctx.response.body = fs.readFileSync(filePath)
  },
  getlist: async (ctx, next) => {
    ctx.response.type = 'application/Json'
    let data = [{
      name: 'xiaoming',
      age: '22'
    },
    {
      name: 'Tom',
      age: '12'
    }]
    ctx.response.body = {
      message: 'success',
      userList: data
    }
  }
}
