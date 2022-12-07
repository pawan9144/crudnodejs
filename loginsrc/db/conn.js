const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("db connection Successful")
}).catch((e)=>{
    console.log(e)
    console.log("db no connection")
})