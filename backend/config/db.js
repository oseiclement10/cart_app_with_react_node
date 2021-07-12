const mongoose = require('mongoose');
let config = require('./config');
const connectDB = async () =>{
    try{
        await mongoose.connect(config.database, {
            useUnifiedTopology:true,
            useNewUrlParser:true
        });
        console.log("connection to database successful");
       
    }catch(error){
        console.error("error connecting to database");
        process.exit(1);
    }
}

module.exports = connectDB;
