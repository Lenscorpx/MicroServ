
const express = require ("express");
const app = express();

app.get('/', (req, res)=> {
    res.send("ceci est notre endpoint!");
})

app.listen(4545, ()=>{
    console.log("Application en marche! --- Bienvenu dans notre service Books!");
})