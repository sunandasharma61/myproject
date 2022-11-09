const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const VerifyMid = require("../middleware/authMid")


router.post("/signIn", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end

router.get("/users/:userId", VerifyMid.authetication, VerifyMid.Authorization, userController.getUserData)

router.put("/users/:userId", VerifyMid.authetication, VerifyMid.Authorization, userController.updateUser)

router.delete("/users/:userId", VerifyMid.authetication, VerifyMid.Authorization, userController.deleteUser)


module.exports = router;