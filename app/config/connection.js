// dependecies
var Sequelize = require("sequelize");
require("dotenv").config();

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("user_db", "root", process.env.MYSQL_KEY, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

module.exports = sequelize;

//Used for JawsDB and posting to Heroku
// var mysql = require("mysql");
// require('dotenv').config();

// let connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else {
//   connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: 3306,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: "hero_db"
//   });
// }
//   connection.connect(function (err) {
//     if(err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });

//   // Export connection 
//   module.exports = connection;

