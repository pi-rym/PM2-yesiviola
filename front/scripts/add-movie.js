window.onload = function() {
  const form = document.getElementById('movie-form');
  form?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const poster = document.getElementById('poster').value;
    const year = Number(document.getElementById('year').value);
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

  
    
    axios.post('http://localhost:3000/movies', movie)
      .then(response  => {
        const newMovie = response.data;
  
        try {
          let movies = JSON.parse(localStorage.getItem('movies')) || [];
          movies.push(newMovie);
          localStorage.setItem('movies', JSON.stringify(movies));
        } catch (error) {
          console.error('Error saving movie to local storage', error);
        }


        window.location.href = 'index.html';
      })
      .catch(error => {
        console.log('hubo un error al crear la pelicula  obtener las peliculas:', error);
      });
    });


  
  document.getElementById('clear-form')?.addEventListener('click', function(){
    document.getElementById('title').value = '';
    document.getElementById('poster').value = '';
    document.getElementById('year').value = '';
    document.getElementById('director').value = '';
    document.getElementById('duration').value  = '';
    document.getElementById('genre').value = '';
    document.getElementById('rate').value = '';
  });
};
































