function renderCards(movies) {
    const movieContainer = document.getElementById('movie-container');
    const body = document.getElementById('body');
  
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title}">
        <p>${movie.year}</p>
        <p>${movie.director}</p>
        <p>${movie.duration}</p>
        <p>${Array.isArray(movie.genre) ? movie.genre.join(',') :  movie.genre}</p>
        <p>⭐⭐⭐⭐⭐ ${movie.rate}</p>
      `;
      movieCard?.addEventListener('mouseover', () => {
          body.style.backgroundImage = `url(${movie.poster})`;
      });
      movieContainer.appendChild(movieCard);
    });
    console.log("todas las targetas renderizadas correctamente")
  }

    export default renderCards;
  
