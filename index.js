const express = require('express')
const app = express()
const port = 80

app.get("/" , (req,res)=>{
    res.send("hi")
})

app.listen(port, ()=>{
    try {
        console.log("Server are started");
    } catch (error) {
        console.log("Internal Server error");
    }
})