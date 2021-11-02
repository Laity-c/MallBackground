const Router = require("koa-router");
const { verifyLongin, verifAuth } = require("../middleware/auth.middleware");
const { login, success} = require("../controller/auth.controller");

const authRouter = new Router();

authRouter.post("/login", verifyLongin, login);
// authRouter.get("/userinfo:name",verifAuth,info)
authRouter.get("/test", verifAuth, success);

module.exports = authRouter;
