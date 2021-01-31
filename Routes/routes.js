const router = require('express').Router();

const User_Controller = require('../Controller/User_Controller');

router.get('/get-users', User_Controller.list);
router.post('/register', User_Controller.register);
router.get('/users/:id', User_Controller.getById);


module.exports = router;