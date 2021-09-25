const { Movie, Character } = require("../models");

// Crear Pelicula
const createMovie = async (req, res) => {
    const { charactersId, ...rest } = req.body;

    const movie = Movie.build(rest);

    await movie.save();

    if(charactersId) {
        charactersId.forEach(async (characterId) => {
            const character = await Character.findOne({ where: { id: characterId } });
            if(character) {
                await movie.addCharacter(character);
            }
        });
    }

    res.json(movie);
}

// Obtener Peliculas
const getMovies = async (req, res) => {
    let movies = await Movie.findAll();

    movies = movies.map(movie => {
        return {
            image: movie.image,
            title: movie.title,
            releaseDate: movie.releaseDate
        }
    });

    res.json(movies);
}

// Obtener una pelicula por su ID
const getMovieById = async (req, res) => {
    const { id } = req.params;

    const movie = await Movie.findOne({ where: { id } });

    if(!movie) {
        return res.status(400).json({
            msg: 'Movie not found'
        });
    }

    const characters = await movie.getCharacters();

    res.json({
        movie,
        characters
    });
}


// Actualizar Pelicula
const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { charactersId, ...rest } = req.body;

    const movie = await Movie.findOne({ where: { id } });

    if(!movie) {
        return res.status(400).json({
            msg: 'Movie not found'
        });
    }

    await movie.update(rest);

    if(charactersId) {
        await movie.setCharacters([]);
        charactersId.forEach(async (characterId) => {
            const character = await Character.findOne({ where: { id: characterId } });
            if (character) {
                await movie.addCharacters(character);
            }
        });
    }

    res.json(movie);
}

// Eliminar Pelicula
const deleteMovie = async (req, res) => {
    const { id } = req.params;

    const movie = await Movie.findOne({ where: { id } });

    if(!movie) {
        return res.status(400).json({
            msg: 'Movie not found'
        });
    }

    await movie.destroy();

    res.json(movie);
}

module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}