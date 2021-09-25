const { Character, Movie } = require("../models");

// Crear un personaje
const createCharacter = async (req, res) => {
    const { moviesId, ...rest } = req.body;

    const character = Character.build(rest);

    await character.save();

    if(moviesId) {
        moviesId.forEach(async (movieId) => {
            const movie = await Movie.findOne({ where: { id: movieId } });
            if (movie) {
                await character.addMovie(movie);
            }
        });
    }

    res.json(character);
}

// Obtener personajes
const getCharacters = async (req, res) => {
    let characters = await Character.findAll();

    characters = characters.map(character => {
        return ({
            image: character.image,
            name: character.name
        });
    });
    res.json(characters);
}

// Obtener un personaje por su Id
const getCharacterById = async (req, res) => {
    const { id } = req.params;

    const character = await Character.findOne({ where: { id } });

    if(!character) {
        return res.status(400).json({
            msg: 'Character not found'
        });
    }

    const movies = await character.getMovies();

    res.json({
        character,
        movies
    });
}

// Actualizar personaje
const updateCharacter = async (req, res) => {
    const { id } = req.params;
    const { moviesId, ...rest } = req.body;

    const character = await Character.findOne({ where: { id } });

    if(!character) {
        return res.status(400).json({
            msg: 'Character not found'
        });
    }

    await character.update(rest);

    if(moviesId) {
        await character.setMovies([]);
        moviesId.forEach(async (movieId) => {
            const movie = await Movie.findOne({ where: { id: movieId } });
            if (movie) {
                await character.addMovies(movie);
            }
        });
    }

    res.json(character);
}

// Eliminar personaje
const deleteCharacter = async (req, res) => {
    const { id } = req.params;

    const character = await Character.findOne({ where: { id } });

    if(!character) {
        return res.status(400).json({
            msg: 'Character not found'
        });
    }

    await character.destroy();

    res.json(character);
}

module.exports = {
    getCharacters,
    getCharacterById,
    createCharacter,
    updateCharacter,
    deleteCharacter
}