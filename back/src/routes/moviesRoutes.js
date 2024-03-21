const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/moviesController');


function validateMovieData(req, res, next) {
    const { title, poster, director, rate, year, duration, genre } = req.body;
    if (!title || !poster || !director || !rate || !year || !duration || !genre) {
        return res.status(400).json({ error: 'Todos los campos son terminantemente obligatorios'});
    }
    if (typeof year !== 'number' || year.toString().length !== 4) {
        return res.status(400).json({ error: 'El año debe ser un numero de 4 digitos obligatorio'});
    }
    next();
};

router.get('/movies', moviesController.getAll);
router.post('/movies', moviesController.createMovie);

module.exports = router;
