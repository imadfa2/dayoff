var mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '213.239.205.250',
  user            : 'root',
  password        : 'mPdzF8%0nxtN',
  database        : 'dayoff'
})
module.exports = pool; 
