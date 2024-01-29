const  mongoose=require('mongoose');
require('dotenv').config()

const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

const DBConnection= async ()=>{
    const MONGODB_URI=`mongodb+srv://${USERNAME}:${PASSWORD}@share-file.aqcpyrq.mongodb.net/?retryWrites=true&w=majority`;
    try {
      await  mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error while connecting with the databse ',error.message);
    }
}

module.exports=DBConnection;