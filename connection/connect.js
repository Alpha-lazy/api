const mongoose = require('mongoose')
uri ="mongodb+srv://anishmore712:Anish%402007@cluster0.u99qujo.mongodb.net/songgs"

const connect = ()=>{mongoose.connect(uri)
    .then(console.log("connected"))}










module.exports = connect