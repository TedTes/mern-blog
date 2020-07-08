require('dotenv').config();
const mongoose=require('mongoose');

function connectToDB(){
    try{
        
        mongoose.connection=mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
     console.log("db connected")
    }
  catch(err){
      console.log(`connection failed ${err}`);
  }
}

module.exports={
  connectToDB
}