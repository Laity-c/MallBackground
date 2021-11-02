/*
	这个文件中的代码主要是用于解析上传的文件
*/
const koaBody = require("koa-body");

console.log("二")
const avatarHandler = koaBody({
    multipart: true, //支持文件上传
    encoding:'gzip', //表单编码
    formidable: {
        maxFields: 2,
        uploadDir: "./uploads/avatar", //设置文件保留路径
        keepExtensions:true, // 是否保存文件后缀
        multipart: false, //是否支持多文件上传
    }
})

module.exports = {
    avatarHandler
}