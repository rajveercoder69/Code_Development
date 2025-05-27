const mongoose= require('mongoose');
const uri="mongodb://0.0.0.0:27017/"

const connectToMongo=()=>{
    mongoose.connect(uri)
    .then((success)=> console.log("connectToMongo"))
    .catch((error)=> console.log(error))
}

module.exports = connectToMongo;