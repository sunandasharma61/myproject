const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    
    author_name: String,
    age:Number,
    address:String,
    ratings: Number

}, { timestamps: true });

module.exports = mongoose.model('AuthorOne', authorSchema)