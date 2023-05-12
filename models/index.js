const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "roles", // Ej: hack_academy_db
  "root", // Ej: root
  "root", // Ej: root
  {
    host: "127.0.0.1", // Ej: 127.0.0.1
    dialect: "mysql", // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

const User = require("./User");

User.initModel(sequelize);

module.exports = {
  sequelize,
  User,
};
