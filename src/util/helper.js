const today=new Date()
const day =today.getDate()
const month=today.getMonth()

const Info ={
    name :'Lithium',
    week : "W3D5",
    topic : "Node js topic -- how to create module and export it",
}


let printDate = function()
{ console.log(day);
return""}
let printMonth = function(){ console.log(month);
return""}
const getBatchInfo = function() {
    console.log(` ${Info.name} , ${Info.week} , ${Info.topic}`)
    return""
}

module.exports.printDate =printDate
module.exports.printMonth =printMonth
module.exports.getBatchInfo =getBatchInfo





