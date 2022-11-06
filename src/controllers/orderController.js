const{isValidObjectId}= require("mongoose")
const userModel = require("../models/userModel")
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")

const createOrder =async function(req,res){
    const { productId , userId }=req.body

    //first validation is - required field validation
    if(!productId || !userId){
        return res.send({message:"Productid and Userid is mandatory"})
    }

    //Second validation is - objectid validation Productid
    if (!isValidObjectId(productId)){
        return res.send({message:"productid is not valid objectid"})    
    }

    //Third validation - objectid validation userid
    if (!isValidObjectId(userId)){
        return res.send({message:"userid is not valid objectid"})
    }

    //Fourth validation is -  user persent  or not 
    const userDetails = await userModel.findById(userId)
    if (!userDetails){
        res.send({message:"user is not persent"})
    }
// Fifth validation- product is present or not
    const productDetails = await productModel.findById(productId)
    if(!productDetails){
        res.send({message:"product is not persent"})
    }
     //if user isfreeappuser than true
const isFreeAppUser =req.isFreeAppUser
if (isFreeAppUser){
    const order =await orderModel.create({
        userId: userId,
        productId:productId,
        amount:0,
        isFreeAppUser:isFreeAppUser,
        date : new Date()
    })
    return res.send({data: order })
}else{
// if the isfreeappuser is not true i.e false
}
if(userDetails.balance<productDetails.price){
    return res.send({message:"you dont have sufficient balance"})
}
    const orderDetails ={
        userId: userId,
        productId:productId,
        amount:productDetails.price,
        isFreeAppUser:isFreeAppUser,
        date : new Date()
    }
    const order =await orderModel.create(orderDetails)
    const currentBalance = await userModel.findByIdAndUpdate(userId,{$set:{balance:userDetails.balance-productDetails.price}})
    return res.send({data: order, currentBalance:currentBalance})

}

module.exports.createOrder= createOrder






