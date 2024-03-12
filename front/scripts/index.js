 const axios = require('axios');
 const renderCards = require('./renderCards');
document.addEventListener('DOMContentLoaded', async (event) => {
  try {
 const response = await axios.get("https://students-api.up.railway.app/movies");
    renderCards(response.data);
  } catch (error) {
    console.error(error);
   }
  });