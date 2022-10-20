const { application } = require('express');
const express = require('express');
const router = express.Router();

//PROBLEM1 consecutive number
// router.get('/missingNumber',(req,res)=>{
//   const arr=[1,2,3,4,6,7,8,9]
//   let missingNumber=0;
//   for(let i=0;i<arr.length;i++){
//     if (arr[i]+1!==arr[i+1]){
//       missingNumber=arr[i]+1; 
//       break;
//     }
//     console.log("missing number is ")
//   }
//   res.send(`the  missing number is ${missingNumber}`);
// });

//PROBLEM2 consecutive number
// router.get('/sol2',function(req,res){
//   let arr=[34,35,37,38,39]
//  let missingNumber=0;
//    for(let i=0;i<arr.length;i++){
//      if (arr[i]+1!==arr[i+1]){
//       missingNumber=arr[i]+1; 
//       break;
//      }
//      console.log("missing number is ",missingNumber)
//     }
//      res.send(`the  missing number is ${missingNumber}`);
  //});


// //PROBLEM3  
let players =[{
  name: "manish",
  dob: "1/1/1995",
  gender: "male",
  city: "jalandhar",
  sports: [
  "swimming"
  ]
  },
  
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: [
    "soccer"
    ]
    }
   ,
    {
      name: "lokesh",
      dob: "1/1/1990",
      gender: "male",
      city: "mumbai",
      sports: [
          "soccer"
      ]
  }
]
router.post('/players',function (req,res){
let newPlayer=req.body
for(let i=0;i<players.length;i++){
let player1 =players[i]
if(player1.name===newPlayer.name){
  res.send("player already exist")
}
else{
  players.push(newPlayer)
  res.send({data:players,status:true})
}
}
  res.send({data : players,status: true})
})


// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })

module.exports = router;