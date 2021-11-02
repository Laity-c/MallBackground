const errorType = require("../constants/error-types");
const UserService = require("../service/user.service");
const md5password = require("../utils/password-handle");

const verifyUser = async (ctx, next) => {
  //1.获取用户名和密码
  console.log(ctx.request.body)
  // const { name, password, phone } = ctx.request.body.values;
  const { name, password, phone } = ctx.request.body;
  //2.用户名和密码不能为空
  if (!name || !password || !phone) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit("error", error, ctx);
  }
  //3.用户名不能重复
  const result = await UserService.getUserByName(name);
  console.log(result)
  if (result.length) {
    const error = new Error(errorType.USER_ALREADY_EXISTS);
    return ctx.app.emit("error", error, ctx);
  }
  await next();
};

//handlePassword对注册的用户进行密码加密保存至数据库
const handlePassword = async (ctx, next) => {
  //获取数据
  // const { password } = ctx.request.body.values;
  const { password } = ctx.request.body;
  //对注册的密码数据进行mds加密处理
  ctx.request.body.password = md5password(password);
  await next();
};

module.exports = {
  verifyUser,
  handlePassword,
};
