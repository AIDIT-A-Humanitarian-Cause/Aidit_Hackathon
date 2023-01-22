const mongoose = require('mongoose')


const connectDb =async (uri)=>{
    try {
      return  mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },()=>console.log("Connected to the mongoose database"));
    } catch (error) {
          console.log(`Error Occured: ${error}`)
    } 
  }
module.exports = connectDb