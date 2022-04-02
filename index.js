require('dotenv').config()
const express= require("express");
const app = express()
const data = require("./db.json")
let PORT = process.env.port || 8080
app.get("/", (req,res)=>{
    res.send("Hello");
})
app.get("/medicine", (req,res)=>{
    res.send(data);
})
app.listen(PORT, async () => {
    try {
        console.log(`listening on port ${PORT}`);
    } catch (err) {
      console.error(err.message);
    }
  
  });




