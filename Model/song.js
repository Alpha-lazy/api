
const mongoose = require('mongoose')
const {Schema} = mongoose

const songSchema = new Schema({

   Name:String,
   uri:String,
   Artist:String


})



module.exports = mongoose.model('Song' , songSchema)