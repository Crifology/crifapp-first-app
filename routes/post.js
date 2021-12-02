const express = require('express');
const {showPosts, showPostWithSlug, createPost, addPost} = require('../controllers/post');

const router = express.Router();

router.get( '/', showPosts );
router.get('/add', addPost);
router.get( '/:slug', showPostWithSlug );

router.post('/', createPost, );

module.exports = router;