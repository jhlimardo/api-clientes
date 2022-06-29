const { Sequelize } = require("sequelize");
const db = require("../db.js");
const { DataTypes } = Sequelize;

const Cliente = db.define(
  "cliente",
  {
    name: DataTypes.STRING,

    lastName: DataTypes.STRING,

    phone: DataTypes.INTEGER,

    age: DataTypes.INTEGER,

    state: DataTypes.STRING,
  },

  {
    timestamps: true,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Cliente;
