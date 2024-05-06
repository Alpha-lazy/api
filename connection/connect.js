const mongoose = require('mongoose')
uri ="mongodb+srv://anishmore712:Anish%402007@cluster0.u99qujo.mongodb.net/Api"

const connect = ()=>
{try {
  mongoose.connect(uri)
  console.log("connected");
} catch (error) {
  console.log("error");
}}










module.exports = connect