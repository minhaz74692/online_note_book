const mongoose =require("mongoose");
const mongoURL = ("mongodb+srv://admin-minhaz:Test123@cluster0.uotfc.mongodb.net/notebookDB");

const connectToMongo =()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("connented To mongo successfully");
    })
}

module.exports = connectToMongo;