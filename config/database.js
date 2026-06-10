const connectDB = async(mongoose)=>{
    try{
        console.log("database connected sucessfully !!")

    }
    catch{
        console.log("database not connected !!")
    }
}
module.exports = connectDB;