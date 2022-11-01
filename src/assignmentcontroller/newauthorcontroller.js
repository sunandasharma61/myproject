const newAuthor= require("../assignmentmodel/newAuthor")

const createAuthor1= async function (req, res) {
    let newAuthor = req.body
    let authorCreated = await newAuthor.create(newauthor)
    res.send({data: authorCreated})
}

const getAuthorData= async function (req, res) {
    let authors = await newAuthor.find()
    res.send({data: authors})
}

module.exports.createAuthor1= createAuthor1
module.exports.getAuthorData= getAuthorData



