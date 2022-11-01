const newPublisher=require(" ../assignmentmodel/newPublisher")

const createPublisher= async function (req, res) {
    let newPublisher = req.body
    let publisherCreated = await newPublisher.create(newPublisher)
    res.send({data: publisherCreated})
}

const getPublisherData= async function (req, res) {
    let publishers = await newPublisher.find()
    res.send({data: publishers})
}


module.exports.createPublisher= createPublisher
module.exports.getPublisherData= getPublisherData
