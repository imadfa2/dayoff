const bodyParser = require('body-parser');
const express = require('express');

const app = express();

// importing routes
const userroute = require('./Routes/routes');

// settings
app.set('port', process.env.PORT || 8080);

// middlewares
app.use(bodyParser.json());
// routes
app.use('/', userroute);

// static files

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});