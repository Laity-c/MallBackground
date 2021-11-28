const jwt = require("jsonwebtoken");

const { PRIVATE_KEY } = require("../app/config");
// const infoService = require("../service/user.service")

class AutoController {
  async login(ctx, next) {
    //1.获取数据
    const { id, name,phone,avatar_url,paymentcode } = ctx.user;
    //2.设置token
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24, //设置过期时间
      algorithm: "RS256", //设置加密方式
    });
    ctx.body = { id, name,phone, token,avatar_url,paymentcode };
  }

  async success(ctx, next) {
    ctx.body = "授权成功";
  }
  
  // async info(ctx,next){
	 //  //1.获取数据
	 //  const name = ctx.params.name;
	 //  //2.根据id去数据里面查询
	 //  const result = await infoService.getUserByName(userId);
	 //  ctx.body = result[0];
  // }
}

module.exports = new AutoController();
