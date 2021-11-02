const Router = require("koa-router");
const {verifAuth} = require("../middleware/auth.middleware")
const {avatarHandler} = require("../middleware/file.middleware")
const {saveAvatarInfo} = require("../controller/file.controller")

const fileRouter = new Router({prefix: "/upload"});

fileRouter.post("/avatar",verifAuth,avatarHandler,saveAvatarInfo);

module.exports = fileRouter;


