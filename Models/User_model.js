var con = require('../Database_connection');

var User = function(user){
  this.username     = user.username;
  this.password      = user.password;
}
  User.create = function (newEmp, result) {
    dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.insertId);
      result(null, res.insertId);
    }
    });
};

module.exports= User;
