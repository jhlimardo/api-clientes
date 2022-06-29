const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
  } = process.env;

console.log("Datos", DB_USER, DB_PASSWORD, DB_NAME, DB_HOST)

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
    logging: false,
    native: false, 
});

module.exports = db;