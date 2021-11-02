const jwt = require("jsonwebtoken");

const errorType = require("../constants/error-types");
const AuthService = require("../service/user.service");
const md5password = require("../utils/password-handle");
const { PUBLIC_KEY } = require("../app/config");

const verifyLongin = async (ctx, next) => {
  //1.获取用户名和密码
  console.log(ctx.request.body)
  const { name, password } = ctx.request.body;
  //2.用户名和密码不能为空
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit("error", error, ctx);
  }
  //3.查询用户名是否存在
  const result = await AuthService.getUserByName(name);
  //result[0]的应该是取出查询到的用户数据对象
  let user = result[0];
    console.log(user);
  //如果查询不到数据,那么就代码用户不存在,那么就返回错误信息
  if (!user) {
    const error = new Error(errorType.USER_DOES_NOT_EXISTS);
    return ctx.app.emit("error", error, ctx);
  }
  //4.判断密码是否和数据库中的密码一致（加密）
  if (md5password(password) !== user.password) {
    const error = new Error(errorType.USER_PASSWORD_NOT_EXISTS);
    return ctx.app.emit("error", error, ctx);
  }

  //登陆成功
  ctx.user = user;
  await next();
};

const verifAuth = async (ctx, next) => {
  console.log("验证授权的middleware~");
  //1.获取token
  // console.log(ctx.request.body)
  const authorization = ctx.headers.authorization ? ctx.headers.authorization : ctx.request.body.token;
  // console.log(authorization)
  //判断该用户是否携带了token
  if (!authorization) {
    const error = new Error(errorType.UNAUTHORIZEDNOT);
    return ctx.app.emit("error", error, ctx);
  }
  const token = authorization.replace("Bearer ", "");
  //2.验证token是否失效
  //try catch是在我们try中的代码报错后进行捕获会放在catch处理捕获到的错误
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
    //把解析后的token传递给user
    console.log(111)
    ctx.user = result;
    console.log(ctx.user);
    await next();
  } catch (err) {
    const error = new Error(errorType.UNAUTHORIZEDNOT);
    ctx.app.emit("error", error, ctx);
  }
};

module.exports = {
  verifyLongin,
  verifAuth,
};
