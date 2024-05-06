const mongoose = require('mongoose')
uri ="mongodb+srv://anishmore712:Anish%402007@cluster0.u99qujo.mongodb.net/Api"

const connect = ()=>
{mongoose.connect(
  uri, 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
)}










module.exports = connect