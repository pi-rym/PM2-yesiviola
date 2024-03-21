const axios = require('axios');
const renderCards = require('./renderCards').default;


document?.addEventListener ('DOMContentLoaded',  async function() {
  try {
    
    const response = await axios.get('http://localhost:3000/movies');
    renderCards(response.data);
  } catch (error) {
    console.log('Error fetching movies:', error);
  }
});

window?.addEventListener('load', function (){
  const form = document.getElementById('movie-form');
  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const poster = document.getElementById('poster').value;
    const year = document.getElementById('year').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duration').value;
    const genre = document.getElementById('genre').value;
    const rate = document.getElementById('rate').value;

    if (!title || !poster || !year || !director || !duration || !genre || !rate) {
      alert('All fields are required');
      return;
    }

    const movie = {
      title: title,
      poster: poster,
      year: year,
      director: director,
      duration: duration,
      genre: genre,
      rate: rate
    };

    try {
      const response = await axios.post('http://localhost:3000/movies', movie);
      console.log(response.data);
      let movies = JSON.parse(localStorage.getItem('movies')) || [];
      movies.push(response.data);
      localStorage.setItem('movies', JSON.stringify(movies));
      window.location.href = 'index.html';
    } catch (error) {
      console.log(error);
    }

  });
 
});