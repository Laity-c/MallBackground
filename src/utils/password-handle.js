//引入node.js中的对数据进行加密的函数
const crypto = require("crypto");
const md5password = password => {
  	const md5 = crypto.createHash("md5"); //我们使用md5的加密方式对密码进行加密
  	//digest函数中不传参默认是2进制为buffer数据。但我们传递了hex参数为16进行数据
  	const result = md5.update(password).digest("hex");
  	return result;
};
module.exports = md5password;