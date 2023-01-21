const mongoose = require('mongoose')


const connectDb = (uri)=>{
    return mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },()=>console.log("Connected to the mongoose database"));
}

module.exports = connectDb