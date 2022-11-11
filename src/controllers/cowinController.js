let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Assignment 1
let getByDistrictIdAndDate = async function (req, res) {
    
    let district_id = req.query.district_id
    let date = req.query.date
    console.log(`query params are: ${district_id} ${date}`)
    var options = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
    }
    let result = await axios(options)
    console.log(result)
    let data = result.data
    res.status(200).send({ msg: result.data })

}

//  Assignment 2
let axios = require("axios")
let getWeather = async function(req,res){
    try {
        let arr =[]
        let city=["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow","Patna"]
        for ( let i of city) {
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${i}&appid=dc25fe20a232f0a05c1452e1e2a61ebc`
        }
        let result = await axios(options);
        let temperature = result.data.main.temp
        let object = { city:i, temp: temperature}
        arr.push(object)
    }
        let sortedCities = arr.sort(function(x,y){return x.temp-y.temp});
        res.status(200).send (sortedCities)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Assignment3
let axios = require("axios")
const memesById = async function(req,res){
    try{
        let username = req.query.username
        let password = req.query.password
        let txt0 = req.query.text0
        let temp_id = req.query.template_id
        let options =  {
            method : "post",
            url : `https://api.imgflip.com/caption_image?template_id=${temp_id}&text0=${txt0}&username=${username}&password=${password}`
        }
        let result=await axios(options);
        console.log(result);
        let data = result.data
        res.status(200).send({msg : data, status : true})
        }
    catch (err){
        console.log(err)
        res.status(500).send({msg:err.message})
    }
    }
module.exports.memesById = memesById
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrictIdAndDate = getByDistrictIdAndDate
module.exports.getWeather = getWeather