const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    }, 
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});


mongoose.model('Post', postSchema);