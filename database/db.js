require('dotenv').config()
const mongoose=require("mongoose")

exports.connectToDB=async()=>{
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to DB');
    } catch (error) {
        console.log("error",error);
    }
}