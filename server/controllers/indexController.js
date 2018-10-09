module.exports = {
  hello: async (ctx, next) => {
    // ctx.response.type = 'application/Json';
    ctx.response.body = {
      name: 'Hello vue & Koa'
    }
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
