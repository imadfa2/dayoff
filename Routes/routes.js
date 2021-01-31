const router = require('express').Router();

const User_Controller = require('../Controller/User_Controller');

router.get('/get-users', User_Controller.list);


module.exports = router;