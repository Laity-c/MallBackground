const Router = require("koa-router");
const { verifAuth } = require("../middleware/auth.middleware");
const {verifyshopID} = require("../middleware/commodity.middleware")
const { addgoods,detail,getcommodity,romvegood } = require("../controller/commodity.controller");

const shopRouter = new Router({ prefix: "/commodity" });

//添加商品
shopRouter.post("/", verifAuth,verifyshopID, addgoods);
//查询用户的所有商品
shopRouter.get('/goods/:userid',detail);
//单个商品查询
shopRouter.get("/good/:shopid",getcommodity);
//删除商品
shopRouter.post("/romove/:shopid",romvegood)

module.exports = shopRouter;