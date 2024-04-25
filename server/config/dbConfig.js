const mongoose = require("mongoose");


mongoose.connect(process.env.mongodbURL)
.then(()=>{
    console.log("Connection Establish")
}).catch((error)=>{
    console.log(error)
}
)