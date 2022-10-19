const express = require('express');
const underscore = require('underscore')
const lodash = require('lodash') //problem4 and 5

const router = express.Router();///test-you //importing a custom module
const xyz = require('../logger')//importing external package
const xy= require ('../util/helper')
const xy1= require ('../validator/formatter')




router.get('/test-me', function (req, res) {   //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)  //Trying to use an external package called underscore
    
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    
  
  //PROBLEM1
    console.log("print resut module 1",xyz.welcome1())



// PROBLEM2
//   console.log("Date:",xy.printDate())
//   console.log("Month:",xy.printMonth())
//   console.log("Info:",xy.getBatchInfo())


//PROBLEM3
  // console.log(xy1.tr1());
  // console.log(xy1.upr1());
  // console.log(xy1.lowr1());
  
  
   // res.send('My first ever api!')
   // const _ =require('lodash')

    

// const month1=["January","February","March","April","May","June","july","August","September","October","November","December"];
// console.log(lodash.chunk(month1,4))
// const oddNum=[1,3,5,7,9,11,13,15,17,19];
// console.log(lodash.tail(oddNum,9));



const Num1=[2,5,4,2,7,47,7,28,3,48,57,28,8]
console.log(lodash.union(Num1));
const keyValue=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
console.log(lodash.fromPairs(keyValue));

    
   res.send('My second api!')  //To be tried what happens if we send multiple response
});

module.exports = router;


