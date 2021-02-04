const pool = require('../Database_connection');
const controller = {};


controller.list = (req, res) => {
    pool.query('SELECT * FROM users', (err, users) => {
     if (!err) {
      res.send(users)
      console.log("all users has been called")
     }else{
     res.json(err);}
    });
  
};
controller.register = (req, res) => {
  const data = req.body;
  pool.query('INSERT INTO users set ?', data, (err) =>{
    if(!err) {
      res.send(`User ${req.body.firstname} ${req.body.lastname} has been added `),
      console.log (`User ${req.body.firstname} ${req.body.lastname} has been added` )

  }else{
    console.log(err),
    res.status(400).send('Error has occured');
  }
  })
};

controller.getById = (req, res) => {
  pool.query(`SELECT * FROM users WHERE id = ${req.params.id}`, (err, user) => {
    if (!err){
      res.send(user),
      console.log(`User with ID ${req.params.id} has been called`)
    }else{
      console.log(err)
    }
  })
}

controller.update = (req, res) => {
    pool.query(`update users set ?  WHERE id = ${req.params.id}`,req.body  ,(err)=> {
    if (!err){
      res.send("User updated successfully"),
      console.log(`User ${req.body.firstname} ${req.body.lastname} has been updated`)
    }else{
      console.log(err)
    }
  })

}

controller.delete = (req, res) => {
  pool.query(`delete from users WHERE id = ${req.params.id}`,(err)=> {
  if (!err){
    res.send("User Deleted successfully"),
    console.log(`User ${req.body.firstname} ${req.body.lastname} has been deleted`)
  }else{
    console.log(err)
  }
})
}


module.exports = controller;