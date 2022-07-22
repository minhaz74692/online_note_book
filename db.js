const mongoose =require("mongoose");
const mongoURL = ("mongodb+srv://admin:admin@cluster0.msl9h.mongodb.net/notebookDB");

const connectToMongo =()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("connented To mongo successfully");
    })
}

module.exports = connectToMongo;