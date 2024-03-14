 const axios = require('axios');
 const renderCards = require('./renderCards');
document.addEventListener('DOMContentLoaded', async (event) => {
  try {
 const response = await axios.get("https://localhost:3000/movies");
    renderCards(response.data);
  } catch (error) {
    console.error(error);
   }
  });