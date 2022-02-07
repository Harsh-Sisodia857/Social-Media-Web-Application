const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user_controller');
router.get('/',usersController.user);
router.get('/profile',usersController.profile);
module.exports = router;