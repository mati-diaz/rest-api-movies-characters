require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { db } = require('./database/db');

const app = express();

// Settings
const port = process.env.PORT || 3000;
const paths = {
    auth: '/api/auth',
    movies: '/api/movies',
    characters: '/api/characters',
}

// Database
db.authenticate()
    .then(() => console.log('Database Connected'))
    .catch(console.log);

// Middlewares
app.use(cors());
app.use(express.json());
// app.use(express.static('src/public'));

// Routes
app.use(paths.auth, require('./routes/auth.routes'));
app.use(paths.movies, require('./routes/movies.routes'));
app.use(paths.characters, require('./routes/characters.routes'));

app.listen(port, () => {
    console.log(`App in port ${port}`);
});