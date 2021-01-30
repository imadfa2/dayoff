const express = require('express');
const bodyParser = require('body-parser');


// create express app
const app = express();





// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


// parse requests of content-type - application/json
app.use(bodyParser.json())


// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});


// Require employee routes
const userRoutes = require('./Routes/Post')


// using as middleware
app.use('/api/v1/user', userRoutes)

