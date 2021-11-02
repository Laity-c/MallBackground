const fileService = require("../service/file.service")
const userService = require("../service/user.service")
const {APP_HOST,APP_PORT} = require("../app/config")
class FileController {
    async saveAvatarInfo(ctx,next){
        // console.log("四")
        //1.获取参数
        const {size,path,type} = ctx.request.files.avatar;
        const {id} = ctx.user;
        // console.log(size,name,type,id)
        //2.判断该用户是否已上传头像
        const getimg = await fileService.getAvatar(id);
        console.log(getimg)
        if(getimg.length){
            //如果用户已上传头像那么就会进入到这里，然后把当前用户之前上传的头像文件都删除掉
            // console.log("222222222222");
            await fileService.removeAvatar(id);
        }
        // 2.保存数据
        const result = await fileService.createAvatar(path,type,size,id);
        // 3.将图片地址保存到用户表中
        const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`;//保存了图片地址
        console.log(avatarUrl)
         await userService.updateAvatarUrlById(avatarUrl,id);
        //3.服务器做出响应
        ctx.body = "头像上传成功";
    }
}

module.exports = new FileController()