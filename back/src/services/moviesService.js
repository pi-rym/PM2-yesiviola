const Movie = require('../models/movie');

class MovieData {
    constructor({ title, poster, director, rate, años, duración, género }) {

        if (!title || !poster || !director) {
            throw new Error('missing required properties: title, poster and director');
        }
        this.title = title;
        this.poster = poster;
        this.director = director;
        this.rate = rate;
        this.años = años;
        this.duración = duración;
        this.género = género;
    }
}

const movies = [
  new MovieData({
    "title": "Guardianes de la Galaxia Vol. 2",
    "year": 2017,
    "director": "James Gunn",
    "duración": "2h 16min",
    "génre": ["Acción", " Aventura", "Comedia"],
    "rate": 7.7,
    "poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
  }),
  new Movie({
    "title": "Star Wars: Episodio IV - Una nueva esperanza",
    "year": 1977,
    "director": "George Lucas",
    "duración": "2h 1min",
    "génre": ["Acción", "Aventura", "Fantasía", "Ciencia ficción"],
    "rate": 8.7,
    "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
  }),
  new Movie({
    "title": "El Señor de los Anillos: La Comunidad del Anillo",
    "year": 2001,
    "director": "Peter Jackson",
    "duración": "2h 58min",
    "génre": ["Acción", "Aventura", "Drama", "Fantasía"],
    "rate": 8.8,
    "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  }),
];

module.exports = {
    getMovies: () => movies,
};