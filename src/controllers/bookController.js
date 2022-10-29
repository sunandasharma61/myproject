const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel =require("../models/authormodel")
const bookModel =require("../models/bookModel")


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createauthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const bhagatBook= async function (req, res) {
    let auth= await authorModel.find({ author_name:"Chetan Bhagat"}).select({author_id:1})
    let chetanBook= await bookModel.find({authorName:auth.auther_id})
    res.send({msg: chetanBook})
}

const changePrice= async function (req, res) {
    let authBooks= await bookModel.find({ bookName:"Two States"}).select({author_id:1})
    let tws= await bookModelOneAnsUpdate.find({bookName: "Two States"},{price:100},{new:true})
    res.send({msg: authBooks}, {msg:tws})
}


const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.createauthor= createauthor
module.exports.bhagatBook= bhagatBook
module.exports.changePrice= changePrice

//module.exports.updateBooks= updateBooks
//module.exports.deleteBooks= deleteBooks




