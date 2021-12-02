const mongoose = require('mongoose');

require('../models/Post');

const connectionString = process.env.DB_CONNECTION;

mongoose.connect(connectionString)
.then(() => {
    console.log('connected to the DB');
})
.catch(err => {
    console.log(err.message);
});