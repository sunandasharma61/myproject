const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId:
    {
        type: ObjectId,
        ref: "User",
        
        requied:true,
    },

    productId: {
        type: ObjectId,
        ref: "Product",
        requied:true,
    },
    amount: {
        type:Number,
        requied:true,
    },
    isFreeAppUser:Boolean,
    date: Date

}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema) //users



