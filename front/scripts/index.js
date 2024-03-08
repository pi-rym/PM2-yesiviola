 const renderCards = require('./renderCards');

document.addEventListener('DOMContentLoaded', (event) => {
  $.get('https://students-api.2.us-1.fl0.io/movies', function(data){
    renderCards(data);
  });
});