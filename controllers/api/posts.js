const mongoose = require('mongoose');

const Post = mongoose.model('Post');

const showPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        err.status = 500;
        next(err);
        return;
    }
};

const showPostWithSlug = async (req, res, next) => {
    const slug = req.params.slug;
    try{
        const matchedPost = await Post.findOne({
        slug: slug
        });
        res.json(matchedPost);
    } catch (err) {
    err.status = 500;
    next(err);
    return;
    }
};

const createPost = async (req, res, next) => {
    const post = req.body;
    if (!post){
        const error = new Error('you have not sent the details of the blog post!');
        next(error);
        return;
    }
    
    // generate the slug for the posts (convert name to hyphen and lower case)
    const slug = post.name.toLowerCase().replaceAll(' ', '-');
    post.slug = slug;

    try{
        const newPost = await Post.create(post);
        res.json(newPost);
    }catch (err) {
        err.status = 500;
        next(err);
        return;
    }
};


module.exports = {
    showPosts,
    showPostWithSlug,
    createPost,
};