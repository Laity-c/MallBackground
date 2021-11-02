const connection = require("../app/database");
class CommodityService{
    async addgoods(goods){
        const {id,
            shopid,
            shoptitle,
            shopprice,
            shopimage,
            shopdesc,} = goods;
        // const {id,shopid,shoptitle,shopcount} = goods;
        console.log(goods);
        // console.log("六")
        const statement = `INSERT INTO commodity(iid,user_id,title,price,\`desc\`,image) VALUES (?,?,?,?,?,?);`;
        const result = await connection.execute(statement, [shopid, id, shoptitle,shopprice,shopdesc,shopimage]);
        // console.log(1111)
        return result;
    }

    async getUserid(userid){
        // console.log(shopid)
        const statement = `SELECT * FROM commodity WHERE user_id = ?;`;
        const result = await  connection.execute(statement,[userid]);
        return result[0];
    }

    //查询用户是否有该商品
    async getShopid(iid,id){
        // console.log(qwer);
        console.log("三");
        const statement = `SELECT * FROM commodity WHERE iid = ? and user_id = ?;`;
        const result = await connection.execute(statement,[iid,id]);
        // console.log(result)
        return result[0];
    }

    //查询商品数据
    async getshop(iid) {
        const statement = `SELECT * FROM commodity WHERE iid = ?;`;
        const result = await connection.execute(statement,[iid]);
        // console.log(result)
        return result[0];
    }

    //删除商品数据
    async romvegood(iid,id){
        const statement = `delete FROM commodity WHERE iid = ? and user_id = ?;`;
        const result = await  connection.execute(statement,[iid,id]);
        return result;
    }
}

module.exports = new CommodityService();