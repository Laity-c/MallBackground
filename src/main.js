/*
    注意点：因为现在是处于node.js环境下所以引入文件需要使用require
            导出需要使用module.exports的方式
            如果是在es6环境下那我们就可以使用import引入文件
            导出就可以使用export

    项目目录介绍：
        app：存放抽离写在main.js文件中的代码
        controller： 存放接口逻辑判断的代码
        router：存放路由文件
        service：处理数据库相关操作
        uitils：存放一些工具类
*/
const app = require("./app");
require("./app/database");
const config = require("./app/config");

//开启监听
app.listen(config.APP_PORT, () => {
  console.log(`服务器端口${config.APP_PORT}启动成功`);
});
