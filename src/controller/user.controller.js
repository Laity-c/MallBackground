/*
    封装一个UserController类
    在类中保存有各种函数，用来处理各个路由中的逻辑
    users路由中所有逻辑代码都会在这个类中编写
*/
const fs = require("fs");

const UserService = require("../service/user.service");

class UserController {
  async create(ctx, next) {
    // 获取用户请求传递的参数
    // console.log(req.body);
    // const user = ctx.request.body.values;
    const user = ctx.request.body;
    //查询数据
    const result = await UserService.create(user);
    //返回数据
    ctx.body = result;
  }

  async getfile(ctx, next) {
    // console.log(ctx.params)
    //1.获取数据
    const userid = ctx.params.userId;
    //2.查询数据
    const avatarInfo = await UserService.getfile(userid);
    console.log(avatarInfo)

    //设置响应文件类型
    ctx.response.set('content-type', avatarInfo.type);
    ctx.body = fs.createReadStream(`${avatarInfo.filename}`);
  }

  //获取用户图片属性中的数据
  async getavatarurl(ctx, next) {
    //1.获取数据
    const userid = ctx.params.userId;
    console.log(userid)
    //查询数据
    const avatarUrl = await UserService.getavatarUrl(userid);
    console.log(avatarUrl)
    ctx.body = avatarUrl;
  }
}

module.exports = new UserController();
