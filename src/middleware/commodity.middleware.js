const errorType = require("../constants/error-types")
const Service = require("../service/commodity.service")

const verifyshopID = async (ctx,next) => {
    //获取参数
    const {shopid,id} = ctx.request.body;
    // console.log("二")
    //查询该商品是否已存在
    const result = await Service.getShopid(shopid,id);
    // console.log("四")
    //如果查询到有数据，那么就抛出错误
    if(result.length){
        const error = new Error(errorType.COMMODITY_ALREADY_EXISTS);
        return ctx.app.emit('error',error,ctx);
    }
    await next();

}

module.exports = {
    verifyshopID
};