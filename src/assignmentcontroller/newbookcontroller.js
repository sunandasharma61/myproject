const AuthorModel= require("../assignmentmodel/newAuthor")
const bookModel= require("../assignmentmodel/newBook")
const publisherModel= require("../assignmentmodel/newPublisher")


const createBook= async function (req, res) {
    let newbook = req.body
    let bookCreated = await newBook.create(newbook)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await newBook.find()
    res.send({data: books})
}

const getBooksWithApDetails= async function (req, res) {
    let {author,publisher} = req.body
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithApDetails= getBooksWithApDetails




