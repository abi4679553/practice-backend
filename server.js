const mongoose = require("mongoose")
const connectDB = require("./config/database")
const express = require("express")
const app = express();
const env = require('dotenv').config()
const port = 5000;
const listen = require("./config/listen")
const database = require("./config/database")
// const port = process.env.PORT

// app.listen(port,()=>{

//     console.log("backend running",)
// })

listen(app);
connectDB(mongoose)
