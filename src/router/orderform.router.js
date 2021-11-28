//引入路由对象
const Router = require("koa-router");
//引入验证相关文件
const {verifAuth} = require("../middleware/auth.middleware");
const {addoreder,getordeder,rommoreder,searchOrder} = require("../controller/orderform.controller")


//创建路由
const orderRouter = new Router({prefix: "/orderform"});

//添加订单
orderRouter.post("/",verifAuth,addoreder);
//获取订单
orderRouter.get("/:userId",getordeder);
//删除订单
orderRouter.post("/remove",verifAuth,rommoreder);
//匹配订单
orderRouter.post("/search/:orderTitle",searchOrder);


module.exports = orderRouter;