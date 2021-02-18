const router = require('express').Router();

const User_Controller = require('../Controller/User_Controller');
const {checktoken } = require('../Config/Token_Auth')

router.get('/get/allusers',checktoken, User_Controller.list);
router.get('/get/:id',checktoken,  User_Controller.getById);
router.post('/register', checktoken, User_Controller.register);
router.put('/update/:id',checktoken,  User_Controller.update);
router.delete('/delete/:id',checktoken,  User_Controller.delete);
router.post('/login',User_Controller.login);

module.exports = router;