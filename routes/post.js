const express = require('express');
const router = express.Router();
const passport = require('passport')
const postController = require('../controllers/post_controller')

router.post('/create',passport.checkAuthentication,postController.create);
router.get('/',postController.post)
router.get('/like',postController.like)
router.get('/comment',postController.comment)

module.exports = router;