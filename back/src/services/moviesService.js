const Movie = require('../models/movie');

exports.getMovies = async () => {
  try {
    return await Movie.find();
  } catch (error) {
    throw error;
  }
};

exports.createMovie = async (movieData) => {
try {
  const movie = new Movie(movieData);
  await movie.save();
  return movie;
} catch (error) {
  throw error;
   }
};










