const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    name:"String",
    balance:{
        type:Number,
        default:100
    },
    address:"String",
    age:Number,
    gender:{
        type:"String",
        enum:["male","female"]

    },
    isFreeAppUser:{
        type:"String",
        default:false
    }
}
   ,{timestamps:true})

module.exports=mongoose.model('userInfo',userSchema)


















// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array