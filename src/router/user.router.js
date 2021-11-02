/*
    我们把users路由代码全抽离到这个文件中
    我们只需要把router对象导出在index文件中引入使用就行了
*/
// const express = require("express");
// const router = express.Router();
const Router = require("koa-router");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");
const { create,getfile,getavatarurl } = require("../controller/user.controller");

const userRouter = new Router({ prefix: "/users" });

userRouter.post("/", verifyUser, handlePassword, create);
//查看用户头像
userRouter.get("/:userId/avatar",getfile);
// 查询用户图片数据
userRouter.get("/:userId/avatarurl",getavatarurl);

module.exports = userRouter;


