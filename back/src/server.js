const express = require('express');
const app = express();
const moviesRoutes = require('./routes/moviesRoutes');

app.use(moviesRoutes);


module.exports = app;
