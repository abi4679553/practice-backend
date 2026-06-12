const mongoose = require("mongoose")
const connectDB = async(mongoose)=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected sucessfully !!")

    }
    catch{
        console.log("database not connected !!")
    }
}
module.exports = connectDB;