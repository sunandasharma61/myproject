const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const productController=require("../controllers/productController")
const orderController=require("../controllers/orderController")
const commonMW = require("../middlewares/commonMiddlewares")

router.post("/create-product",productController.createProduct)

router.post("/create-user",commonMW.headerValidation,userController.createUser)

router.post("/create-order",commonMW.headerValidation,orderController.createOrder)









//const BookController= require("../controllers/bookController")
//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
// router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
//     res.send("Ending the cycle")
// }  )
// router.post("/createUser", commonMW.myMiddleware, userController.createUser)
// router.get("/dummy1", commonMW.myOtherMiddleware, userController.dummyOne)
// router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)
// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)


module.exports = router;