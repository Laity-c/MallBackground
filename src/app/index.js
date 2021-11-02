//为了让main.js文件中的代码更简洁我们把一部分代码抽离出来
//引入express
// const express = require("express");
const koa = require("koa");
//解决跨域问题
const koaBody = require("koa-body");
const cors = require("koa-cors");

// const bodyParser = require("koa-bodyparser");
const errorHandle = require("../app/error-handle");
const userRoutes = require("../router");


//创建服务器
const app = new koa();

//跨域
//解析body数据
// app.use(express.json());

// app.use(bodyParser());

app.use(koaBody());
app.use(cors());

//动态注册路由文件
// 第一种方式 不需要传入app属性
app.userRoutes = userRoutes;
app.userRoutes();
// 第二种方式 需要传入app属性
// userRoutes(app);

app.on("error", errorHandle);

module.exports = app;
