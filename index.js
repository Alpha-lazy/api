const express = require('express')
const app = express()
const port = 80
const connect = require('./connection/connect')
const songs = require('./Model/song')
app.get("/" , async(req,res)=>{
   
    // res.status(200).json( await songs.collection.find({Name:"295"}))
  res.send("hi")
})
app.use(express.static('./aulbum.json'))
app.listen(port, async()=>{
    try {
        await connect() 
        console.log("Server are started");
    } catch (error) {
        console.log("Internal error");
    }
})

module.exports = connect