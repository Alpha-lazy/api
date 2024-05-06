const express = require('express')
const app = express()
const port = 80
const connect = require('./connection/connect')
const songs = require('./Model/song')
app.get("/" , async(req,res)=>{
    await connect()
    res.status(200).json( await songs.findOne({Name:"295"}))
})

app.listen(port, async()=>{
    try {
        
        console.log("Server are started");
    } catch (error) {
        console.log("Internal Server error");
    }
})

module.exports = connect