const jwt = require("jsonwebtoken");
const auth =function (req,res,next){
    let token=req.headers["x-auth-token"];
  if(!token){
     res.send({msg: "header missing"})}
  let decodedToken = jwt.verify(token, "functionup-lithium-very-very-secret-key")
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" })
  next()
}
module.exports.auth=auth