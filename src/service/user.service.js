/**
 * 这个文件将会保存我们从数据库中查询用户数据的所有操作
 */
const connection = require("../app/database");

class UserService {
  async create(user) {	  
    //将user存储到数据库中
    const { name, password, phone } = user;
	console.log(user);
    const statement = `INSERT INTO user (name,password,phone) VALUES (?, ?, ?);`;
    const result = await connection.execute(statement, [name, password, phone]);
    return result;
  }
  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`;
    const result = await connection.execute(statement, [name]);
    return result[0];
  }
  //获取用户头像
  async getfile(userid){
    const statement = `SELECT * FROM avatar WHERE user_id = ?;`;
    const [result] = await connection.execute(statement,[userid]);
    return result[0];
  }
  //保存用户头像
  async updateAvatarUrlById(avatarUrl,userid){
    console.log(avatarUrl,userid)
    const statement = `UPDATE \`user\` SET avatar_url = ? WHERE id = ?;`;
    const result = await connection.execute(statement,[avatarUrl,userid]);
    // console.log("成功",result)
    return result;
  }

  //返回用户头像数据
  async getavatarUrl(userid){
    const statement = `SELECT avatar_url FROM \`user\` WHERE id = ?;`;
    const result = await connection.execute(statement,[userid]);
    // console.log("成功",result)
    return result[0];
  }
}

module.exports = new UserService();
