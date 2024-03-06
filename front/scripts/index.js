document.addEventListener('DOMContentLoaded', (event) => {
      const movieContainer = document.getElementById('movie-container');
      const body = document.getElementById('body');


     $.get('https://students-api.2.us-1.fl0.io/movies', function(data){
      data.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
          <h2>${movie.title}</h2>
          <img src="${movie.poster}" alt="${movie.title}">
          <p>${movie.year}</p>
          <p>${movie.director}</p>
          <p>${movie.duration}</p>
          <p>${movie.genre.join(', ')}</p>
          <p>⭐⭐⭐⭐⭐ ${movie.rate}</p>
        `;
        movieCard.addEventListener('mouseover', () => {
            body.style.backgroundImage = `url(${movie.poster})`;
        });
        movieContainer.appendChild(movieCard);
      });
    });
  });




//  console.log(tempData);
