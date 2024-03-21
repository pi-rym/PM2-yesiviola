const { getMovies, createMovie } = require('../services/moviesService');

const moviesController = {
    getAll: async (req, res) => {
      try {
       const movies = await getMovies();
       res.json(movies);
     } catch (err) {
         res.status(500).json({ error: err.message});
        }
    },
    createMovie:  async (req, res) => {
        const { title, poster, director, rate, year, duration, genre } = req.body;
        const movieData = { title, poster, director, rate, year, duration, genre};

        try {
            const movie = await createMovie(movieData);
            res.status(201).json({message: 'Movie created successfully', movie});
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    },
};



module.exports = moviesController;