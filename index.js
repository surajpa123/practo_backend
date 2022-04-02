require('dotenv').config()
const express= require("express");
const app = express()
const data = require("./db.json")
let PORT = process.env.port || 8080


const host = '0.0.0.0';
app.get("/", (req,res)=>{
    res.send("Hello");
})
app.get("/medicine", (req,res)=>{
    res.send(data);
})
app.listen(PORT,host, async () => {
    try {
        console.log(`listening on port ${PORT}`);
    } catch (err) {
      console.error(err.message);
    }
  
  });




