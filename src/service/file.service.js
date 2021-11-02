const connection = require("../app/database");
class fileService {
    //保存用户上传的文件
     async createAvatar(filename,mimetype,size,userid){
        const statement = `INSERT INTO avatar (filename,mimetype,size,user_id) VALUES (?,?,?,?);`;
        const result = connection.execute(statement,[filename,mimetype,size,userid]);
        return result;
    }

    //查看用户是否已上传过头像
    async getAvatar(id){
         const statement = `SELECT * FROM avatar WHERE user_id = ?;`;
         const result = connection.execute(statement,[id]);
        console.log("------------------")
        // console.log(result);
         return result;
    }
    //删除用户上传过的头像
    async removeAvatar(id){
         const statement = `DELETE FROM avatar WHERE user_id = ?;`;
         const result = connection.execute(statement,[id]);
         return result;
    }
}

module.exports = new fileService()