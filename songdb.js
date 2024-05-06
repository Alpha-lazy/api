
const  songs = require('./Model/song.js')
const aulbums = require('./aulbum.json')
const create = async() =>{
const connect = require("./connection/connect")
    try {
        
       await connect()
       await songs.deleteMany()
     await songs.create(aulbums)
     console.log("success to ceate");
    } catch (error) {
        console.log(error);
    }
    
}
create()