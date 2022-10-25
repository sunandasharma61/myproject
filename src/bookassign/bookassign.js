const Userbookassignment=require("../bookassignment/bookassignment")

const bookAssign= async function (req, res) {
    let data= req.body
    let savedBookData= await Userbookassignment.create(data)
    res.send({msg: savedBookData})
}

const getbookAssign= async function (req, res) {
    let allBooks= await Userbookassignment.find()
    res.send({msg: allBooks})
}

module.exports.bookAssign=bookAssign
module.exports.getbookAssign =getbookAssign