const { getMovies } = require('../services/moviesService');

const moviesController = {
    getAll: (req, res) => {
        const movies = getMovies();
        res.json(movies);
    
    },
};

module.exports = moviesController;