const bodyParser = require('body-parser');
const express = require('express'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const userroute = require('./Routes/routes');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(myConnection(mysql, {
  host: '213.239.205.250',
  user: 'root',
  password: 'mPdzF8%0nxtN',
  port: 3306,
  database: 'dayoff'
}))
app.use(bodyParser.json());
// routes
app.use('/', userroute);

// static files

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});