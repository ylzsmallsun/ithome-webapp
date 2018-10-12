const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)

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
    ctx.response.body = await readFile(filePath, 'utf-8')
    // ctx.response.body = fs.readFileSync(filePath)
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
