const pool = require('../Database_connection');
const controller = {};


controller.list = (req, res) => {
    pool.query('SELECT * FROM users', (err, users) => {
     if (err) {
      res.json(err);
     }
     res.send(users)
    });
  
};
controller.register = (req, res) => {
  const data = req.body;
  console.log(req.body)
  pool.query('INSERT INTO users set ?', data, (err) =>{
    if(err) {console.log(err),res.status(400).send('غلطان حبيبي');}else{res.send('ماجي');}
  })
};

controller.getById = (req, res) => {
  pool.query('SELECT * FROM users WHERE id = ?' , [req.params.id], (err, rows) => {
    if (!err){
      res.send(rows);
    }else{
      console.log(err)
    }
  })
}


module.exports = controller;