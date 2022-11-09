const jwt = require("jsonwebtoken");


const authetication = function (req, res, Next) {
    let token = req.headers["x-auth-token"];


    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token) return res.send({ status: false, msg: "token must be present" });

    // console.log(token);

    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself

    // Decoding requires the secret again. 
    // A token can only be decoded successfully if the same secret was used to create(sign) that token.
    // And because this token is only known to the server, it can be assumed that if a token is decoded at server then this token must have been issued by the same server in past.
    let decodedToken = jwt.verify(token, "Sunanda_Sharma-from_lithium");

    if (!decodedToken)
        return res.status(403).send({ status: false, msg: "token is invalid" });
    Next()
}

const Authorization = function (req, res, Next) {

    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "Sunanda_Sharma-from_lithium");
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' });
    Next()
}


module.exports.authetication = authetication
module.exports.Authorization = Authorization

// const authenticate = function(req, req, next) {
//     //check the token in request header
//     //validate this token

//     next()
// }


// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     next()
// }