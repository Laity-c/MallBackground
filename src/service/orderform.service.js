const connection = require("../app/database");
class orderformService{
    async addoreder(orderdata){
        // console.log("进入到数据了")
        //获取数据
        const {id,
            shopid,
            shoptitle,
            shopprice,
            shopimage,
            shopdesc,} = orderdata;
        // const {iid,user_id,title,price,shopdesc,image} = orderdata;
        // console.log(iid,user_id,title,price,shopdesc,image);
        //将获取到的数据保存到orderform表中
        const statement = `INSERT INTO orderform(iid,user_id,title,price,\`desc\`,image) VALUES (?,?,?,?,?,?);`;
        const result = await connection.execute(statement, [shopid, id, shoptitle,shopprice,shopdesc,shopimage]);
        return result;
    }

    async getoreder(userId){
        const statement = `SELECT * FROM orderform WHERE user_id = ?;`;
        const [result] = await connection.execute(statement,[userId]);
        return result;
    }

    async rommoreder(id,userId){
        const statement = `DELETE FROM orderform WHERE id = ? and user_id = ?;`;
        const result = await connection.execute(statement,[id,userId]);
        return result;
    }

    async searchOrder(orderTitle,id){
        const statement = `SELECT * FROM orderform WHERE title LIKE '%${orderTitle}%' and user_id = ${id};`;
        // console.log(statement)
        const result = await connection.execute(statement);
        return result[0];
    }
}

module.exports = new orderformService()