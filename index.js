const express = require('express')
const app = express()
const port = 80
const connect = require('./connection/connect')
const songs = require('./Model/song')
app.get("/" , async(req,res)=>{
    res.status(200).json( await songs.findOne({Name:"295"}))
})

app.listen(port, async()=>{
    try {
        await connect()
        console.log("Server are started");
    } catch (error) {
        console.log("Internal Server error");
    }
})

module.exports = connect