const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")


const UserController= require("../controllers/userController")

const bookassignment=require("../bookassignment/bookassignment")

const bookassign=require("../bookassign/bookassign")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/bookAssign", bookassign.bookAssign )
router.get("/getbookAssign",bookassign.getbookAssign)

module.exports = router;



