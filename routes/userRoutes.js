const express = require('express');
const { getHello, registerController, loginController } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/', getHello);
userRouter.post('/register', registerController);
userRouter.post('/login', loginController);



module.exports.userRouter = userRouter;