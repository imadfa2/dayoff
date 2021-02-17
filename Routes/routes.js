const router = require('express').Router();

const User_Controller = require('../Controller/User_Controller');
const {checktoken } = require('../Controller/auth')

router.get('/users/get/allusers',checktoken, User_Controller.list);
router.get('/users/get/:id',checktoken,  User_Controller.getById);
router.post('/users/register', checktoken, User_Controller.register);
router.put('/users/update/:id',checktoken,  User_Controller.update);
router.delete('/users/delete/:id',checktoken,  User_Controller.delete);
router.post('/user/login',User_Controller.login);

module.exports = router;