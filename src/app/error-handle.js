//引入错误类型属性
const errorType = require("../constants/error-types");
const errorHandle = (error, ctx) => {
  //声明存储错误信息和状态码的属性
  let message, status;

  switch (error.message) {
    case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400;
      message = "用户名和密码不能为空";
      break;
    case errorType.USER_ALREADY_EXISTS:
      status = 409;
      message = "用户名已存在";
      break;
    case errorType.USER_DOES_NOT_EXISTS:
      status = 400;
      message = "用户名不存在";
      break;
    case errorType.USER_PASSWORD_NOT_EXISTS:
      status = 400;
      message = "您输入的密码不正确";
      break;
    case errorType.UNAUTHORIZEDNOT:
      status = 401;
      message = "token已失效";
      break;
    case errorType.COMMODITY_ALREADY_EXISTS:
      status = 409;
      message = "添加了重复的商品,数量加一";
      break;
    default:
      code = 404;
      message = "NOT FOUND";
  }

  ctx.status = code;
  ctx.body = message;
};

module.exports = errorHandle;
