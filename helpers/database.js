const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "mariadb",
    host: process.env.DB_HOST,
  }
);

module.exports = sequelize;
