const mongoose =require("mongoose");
require('dotenv').config();
const connectToMongo =()=>{
    mongoose.connect(process.env.MONGODB_URL,()=>{
        console.log("connented To mongo successfully");
    })
}

module.exports = connectToMongo;