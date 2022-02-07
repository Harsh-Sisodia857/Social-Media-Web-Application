const express = require('express');

const router = express.Router();

const postController = require('../controllers/post_controller')

router.get('/',postController.post)
router.get('/like',postController.like)
router.get('/comment',postController.comment)

module.exports = router