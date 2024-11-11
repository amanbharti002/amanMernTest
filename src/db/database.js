const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/apnaDb").then((res)=>{
    console.log("mongodb connected");

},(fail)=>{
    console.log("not connected");

})