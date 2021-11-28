const Service = require("../service/commodity.service")
class  commodityService {
    async addgoods(ctx, next) {
        // 获取用户请求传递的参数
        // console.log(ctx.request.body)
        // console.log("五")
        const goods = ctx.request.body;
        //查询数据
        const result = await Service.addgoods(goods);
        //返回数据
        ctx.body = result;
        // ctx.body = "成功";
    }

    async detail(ctx,next){
        // console.log(111)
        //1.获取数据(userid)
        // console.log(ctx.params.userid)
        const userid = ctx.params.userid;
        //2.根据id去数据里面查询
        const result = await Service.getUserid(userid);
        ctx.body = result;
    }

    async getcommodity(ctx,next){
        //1.获取数据(shopid)
        const shopid = ctx.params.shopid;
        //2.根据商品id去数据里面查询
        const result = await Service.getshop(shopid);
        ctx.body = result;
    }
    async romvegood(ctx,next){
        //获取数据(shopid)
        const {id} = ctx.request.body;
        const shopid = ctx.params.shopid;
        console.log(id,shopid)
        //删除商品
        const result = await  Service.romvegood(shopid,id);
        ctx.body = "商品删除成功";
    }
}

module.exports = new commodityService()