const express = require('express');
const cors = require("cors");

require("dotenv").config();
require("./config/dbConfig");

// console.log(process.env.mongodbURL)

//routers
const userRouter = require("./routes/userRoutes")
const movieRouter = require("./routes/movieRoutes")
const theatreRoute = require("./routes/theatreRoutes")

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/movie", movieRouter);
app.use("/api/theatre", theatreRoute);

app.listen(8080, ()=>{
    console.log('server is running on http://localhost:8080')
})
