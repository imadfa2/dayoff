var mysql = require('mysql');
const env = require('dotenv').config()
//Connection to database
var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port : process.env.DB_PORT
  
});
//feedback
con.connect(function(err) {
  if(err)
  console.error(err);
  else
  console.error('connencted!');
});

// con.query('create table test',(error, results, fields)=>{
//   console.log(results)
//   console.log(fields)
//   console.error(error)
//   })
  // con.query('select * from tab',(error, results, fields)=>{
  // console.log(results)
  // console.log(fields)
  // })
// export default con;
