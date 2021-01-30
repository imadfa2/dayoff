const express = require('express')
const router = express.Router()
const usercontroller =   require('../Controller/User_Controller');

// Create a new employee
router.post('/', function(req,res) {
    usercontroller.create
});



module.exports = router