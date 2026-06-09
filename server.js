const express = require("express")
const app = express();
const env = require('dotenv').config()
const port = 5000;
// const port = process.env.PORT

app.listen(port,()=>{

    console.log("backend running",)
})