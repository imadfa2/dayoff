var mysql = require('mysql');
const env = require('dotenv').config()
//Connection to database
var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
});
//feedback
con.connect(function(err) {
  console.log("Connected!");
});
