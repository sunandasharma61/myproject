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
})

module.exports = mongoose.model('product', productSchema) //users



// String, Number
// Boolean, Object/json, array

