const express = require("express")
const Movie = require("../models/movieModel");
const authMiddleware = require("../middlewares/authMiddleWare");

const router = express.Router();


//create
router.post('/add-movie', authMiddleware, async (req, res) => {
    try {
      const movie = req.body;
      const newMovie = new Movie(movie);
      await newMovie.save();
      res.status(200).send({
        success: true,
        message: 'Movie added successfully',
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  });

//read
router.get("/get-all-movies", async (req, res)=>{
    try{
        const movies = await Movie.find()
        res.status(200).send({
            success:true,
            message:"Movies Fetched Successfully",
            data: movies
        })
    }catch(error){
        res.status(500).send({
            success:false,
            message:error.message,
        })
}
  })


//update
router.put("/update-movie", authMiddleware, async (req, res)=>{
    try{
       await Movie.findByIdAndUpdate(req.body.movieId, req.body)
       res.send({
        success: true,
        message: "Movie Updated Successfully",
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.message
      });
    }
  });

//delete
router.delete("/delete-movie", authMiddleware, async (request, response) => {
    try {
      await Movie.findByIdAndDelete(request.query.movieId);
      response.send({
        success: true,
        message: "Movie Deleted Successfully",
      });
    } catch (err) {
      response.status(500).send({
        success: false,
        message: err.message
      });
    }
  });

  router.get("/get-movie-by-id/:movieId", authMiddleware, async (request, response) => {
    try {
      const movie = await Movie.findById(request.params.movieId);
      if (movie) {
        response.status(200).send({
          success: true,
          message: "Movie Fetched Successfully",
          data: movie
        });
      } else {
        response.status(404).send({
          success: false,
          message: "Movie Not found"
        });
      }
    } catch (err) {
      response.status(500).send({
        success: false,
        message: err.message
      });
    }
  });
  
  module.exports = router;
