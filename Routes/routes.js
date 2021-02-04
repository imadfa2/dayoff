const router = require('express').Router();

const User_Controller = require('../Controller/User_Controller');

router.get('/users/get/allusers', User_Controller.list);
router.get('/users/get/:id', User_Controller.getById);
router.post('/users/register', User_Controller.register);
router.put('/users/update/:id', User_Controller.update);
router.delete('/users/delete/:id', User_Controller.delete)


module.exports = router;