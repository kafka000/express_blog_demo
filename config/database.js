/*
 * @Description: 
 */
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  // 数据库名称
  "nodejs_blog",
  // 数据库用户名
  "root",
  // 数据库密码
  "123456",
  {
    // 如果是远程数据库，可以填写 ip 地址
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
