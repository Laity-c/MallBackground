const fs = require("fs");
// const userRoutes = app => {
//   fs.readdirSync(__dirname).forEach(file => {
//     if (file === "index.js") return;
//     const router = require(`./${file}`);
//     app.use(router.routes());
//     app.use(router.allowedMethods());
//     console.log(file);
//   });
// };

const userRoutes = function () {
  //fs.readdirSync读取当前目录下所有文件
  fs.readdirSync(__dirname).forEach(file => {
    //读取到了index.js文件就跳出
    if (file === "index.js") return;
    //把除index.js之外的所有文件都引入
    const router = require(`./${file}`);
    // 用户引入的文件做一个路由注册
    this.use(router.routes());
    this.use(router.allowedMethods());
    console.log(file);
  });
};

module.exports = userRoutes;
