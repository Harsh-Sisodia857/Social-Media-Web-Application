const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user_controller');
router.get('/',usersController.user);
router.get('/profile',usersController.profile);
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

// Creating New User (Sign Up)
router.post('/create',usersController.create)
router.post('/create-session',usersController.createSession)
module.exports = router;