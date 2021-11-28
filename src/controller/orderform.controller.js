const Service = require("../service/orderform.service")
class orderformController {
    async addoreder(ctx,next){
        // 获取用户请求传递的参数
        console.log(ctx.request.body)
        const orderdata = ctx.request.body;
        //查询数据
        const result = await Service.addoreder(orderdata);
        //返回数据
        ctx.body = "成功"
    }

    async getordeder(ctx,next){
        // 获取用户请求传递的参数
        // console.log(ctx.request.body)
        const userId = ctx.request.params.userId;
        // console.log(orderdata)
        //查询数据
        const result = await Service.getoreder(userId);
        //返回数据
        ctx.body = result
    }

    async rommoreder(ctx,next){
        // 获取用户请求传递的参数
        // console.log("_____________")
        // console.log(ctx.request.body)
        const {orderid,id} = ctx.request.body;
        console.log(orderid,id)
        const result = await Service.rommoreder(orderid,id);
        ctx.body = "删除成功";
    }

    async searchOrder(ctx,next){
        //获取传递的参数
        console.log(ctx.request.body)
        const orderTitle = ctx.request.params.orderTitle;
        const {id} = ctx.request.body;
        console.log(orderTitle,id);
        const result = await Service.searchOrder(orderTitle,id);
        ctx.body = result;
    }
}

module.exports = new orderformController()