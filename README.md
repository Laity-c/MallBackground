# MallBackground
MallBackground为SuperMall的后台文件

# 第一步 安装依赖
npm install

# 第二步 运行项目
npm start



# 注意事项

连接数据库时，需要修改.env文件中的数据库信息，修改成自己电脑上的。

# 数据库文件

DROP TABLE IF EXISTS `avatar`;
CREATE TABLE `avatar`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mimetype` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `size` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `createAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `filename`(`filename`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for commodity
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iid` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` float(8, 2) NOT NULL,
  `desc` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `commodity_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 55 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for orderform
-- ----------------------------
DROP TABLE IF EXISTS `orderform`;
CREATE TABLE `orderform`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iid` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` float(8, 2) NOT NULL,
  `desc` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `orderform_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 40 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `updateAt` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `avatar_url` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `paymentcode` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;