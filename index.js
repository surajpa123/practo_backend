const express= require("express");

const app = express()

const data = require("./db.json")

let port = process.env.port || 3000

app.get("/", (req,res)=>{
    res.send("Hello");
})

app.get("/medicine", (req,res)=>{
    res.send(data);
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})


