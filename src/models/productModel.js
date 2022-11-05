const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: String,
    price: {
        type: Number,
        required: true

    } //mandatory property
 }, { timestamps: true });


module.exports = mongoose.model('Product', productSchema) //users



// String, Number
// Boolean, Object/json, array

