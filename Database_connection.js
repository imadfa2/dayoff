var mysql = require('mysql');
const env = require('dotenv').config()
//Connection to database
var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port : process.env.DB_PORT,
  database : process.env.DB_DB
  
});
//feedback
con.connect(function(err) {
  if(err)
  console.error(err);
  else
  console.error('connencted!');
});


module.exports = con; 
