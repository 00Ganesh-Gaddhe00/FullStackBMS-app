const express = require('express');
const cors = require("cors");

require("dotenv").config();
require("./config/dbConfig");

// console.log(process.env.mongodbURL)

//routers
const userRouter = require("./routes/userRoutes")

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", userRouter);

app.listen(8080, ()=>{
    console.log('server is running on http://localhost:8080')
})
