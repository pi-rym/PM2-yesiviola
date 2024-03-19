require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/server');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });