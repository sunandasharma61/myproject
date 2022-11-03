const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")


router.post("/createAuthor", authorController.createAuthor  )
router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )
router.get("/getBooksData", bookController.getBooksData)

router.post("/createPublisher", publisherController.createPublisher)
router.get("/getPublisher", publisherController.getPublisher)

router.get("/bookauthor", bookController.bookAuthor)
router.put("/attribute", bookController.attribute)
router.put("/update", bookController.update)

module.exports = router;



