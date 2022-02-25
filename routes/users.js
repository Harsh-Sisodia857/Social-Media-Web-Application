const express = require('express');
const router = express.Router();
const passport = require('passport')
const usersController = require('../controllers/user_controller');

router.get('/',usersController.user);
// when user is signed in only when profile page is accessible
router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

// Creating New User (Sign Up)
router.post('/create',usersController.create)
//user passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);

module.exports = router;