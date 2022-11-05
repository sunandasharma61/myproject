const productModel= require("../models/productModel")

const createProduct= async function (req, res) {
    const {name,category,price} =req.body
    // requird field validation
    if(!name || !category || !price) {
        return res.send({message:"All fields are mandatory"})
    }
     let productDetails = await productModel.create({name,category,price})
        res.send({data: productDetails})

}

module.exports.createProduct=createProduct








// const createProduct= async function (req, res,next) {
//     let data = req.body
//     let savedData = await productModel.create(data)
//     res.send({data: savedData})
// }

// module.exports.createProduct=createProduct


