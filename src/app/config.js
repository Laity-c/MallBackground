const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

//把.env文件中的信息都添加到环境变量中
dotenv.config();

const PRIVATE_KEY = fs.readFileSync(
  path.resolve(__dirname, "./keys/private.key")
);
const PUBLIC_KEY = fs.readFileSync(
  path.resolve(__dirname, "./keys/public.key")
);

module.exports = {
  APP_PORT,
  APP_HOST,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;
// console.log(process.env.APP_PORT);

module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;
