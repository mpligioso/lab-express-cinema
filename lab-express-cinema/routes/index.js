const express = require('express');
const router  = express.Router();

const Movie = require("../models/movie-model.js")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movieResults) => {
      res.locals.movieArray = movieResults;
      res.render("movies.hbs")
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/movies/:movieId', (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
  .then((result) => {
    res.locals.oneMovie = result;
    res.render("see-more.hbs")
  })
  .catch((err) => {
    next(err);
  });
})

module.exports = router;
