const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM users', (err, users) => {
     if (err) {
      res.json(err);
     }
     res.send(users)
    });
  });
};



module.exports = controller;