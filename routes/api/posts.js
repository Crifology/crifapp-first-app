const express = require('express');
const {showPosts, showPostWithSlug, createPost } = require('../../controllers/api/posts');

const router = express.Router();

router.get( '/', showPosts );
router.get( '/:slug', showPostWithSlug );

router.post('/', createPost, );

module.exports = router;