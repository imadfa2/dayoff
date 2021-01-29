var mysql = require('mysql');
const env = require('dotenv').config()

var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});

con.connect(function(err) {
  console.log("Connected!");
});
