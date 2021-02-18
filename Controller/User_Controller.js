const pool = require("../Database_connection");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { token } = require("../Config/Token_Create");
const controller = {};

controller.list = (req, res) => {
  pool.query("SELECT * FROM users", (err, users) => {
    if (!err) {
      res.send(users);
      console.log("all users has been called");
    } else {
      res.json(err);
    }
  });
};

controller.register = (req, res) => {
  pool.query("INSERT INTO users set ?", req.body, (err) => {
    if (!err) {
      res.send(
        `User ${req.body.firstname} ${req.body.lastname} has been added `
      ),
        console.log(
          `User ${req.body.firstname} ${req.body.lastname} has been added`
        );
    } else {
      console.log(err), res.status(400).send("Error has occured");
    }
  });
};

controller.getById = (req, res) => {
  pool.query(`SELECT * FROM users WHERE id = ${req.params.id}`, (err, user) => {
    if (!err) {
      res.send(user),
        console.log(`User with ID ${req.params.id} has been called`);
    } else {
      console.log(err);
    }
  });
};

controller.update = (req, res) => {
  pool.query(
    `update users set ?  WHERE id = ${req.params.id}`,
    req.body,
    (err) => {
      if (!err) {
        res.send("User updated successfully"),
          console.log(
            `User ${req.body.firstname} ${req.body.lastname} has been updated`
          );
      } else {
        console.log(err);
      }
    }
  );
};

controller.delete = (req, res) => {
  pool.query(`delete from users WHERE id = ${req.params.id}`, (err) => {
    if (!err) {
      res.send("User Deleted successfully"),
        console.log(
          `User ${req.body.firstname} ${req.body.lastname} has been deleted`
        );
    } else {
      console.log(err);
    }
  });
};

controller.login = (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  if (username && password) {
    // check if user exists
    pool.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        if (results.length > 0) {
          res.json(token);
        } else {
          res.send("Incorrect Username and/or Password!");
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter Username and Password!");
    res.end();
  }
};

module.exports = controller;
