const { getMovies } = require('../services/moviesService');

const moviesController = {
    getAll: (req, res) => {
        getMovies()
             .then(movies => res.json(movies))
             .catch(err => res.status(500).json({ error: err.message}));
    },
};

module.exports = moviesController;