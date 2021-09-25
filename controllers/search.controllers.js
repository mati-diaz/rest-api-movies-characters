const { Character, Movie, Genre } = require("../models");

const searchCharacters = async (req, res) => {
    if(Object.keys(req.query).length === 0) {
        return res.status(400).json({
            msg: 'No search parameters'
        });
    }

    const { movie: movieId, ...rest } = req.query;
    
    let characters = await Character.findAll({ where: rest });

    if(movieId) {
        const movie = await Movie.findByPk(movieId);
        characters = await movie.getCharacters();
        if(Object.keys(rest).length > 0) {
            characters = characters.filter(character => ((rest.name ? character.name == rest.name : true) && (rest.age ? character.age == rest.age : true) && (rest.weight ? character.weight == rest.weight : true)));
        }
    }

    res.json(characters);
}

const searchMovies = async (req, res) => {
    if(Object.keys(req.query).length === 0) {
        return res.status(400).json({
            msg: 'No search parameters'
        });
    }

    const { genre:genreId, ...rest } = req.query;

    let movies = await Movie.findAll({ where: rest });

    if(genreId) {
        const genre = await Genre.findByPk(genreId);
        movies = await genre.getMovies();
    }

    res.json(movies);
}

module.exports = {
    searchCharacters,
    searchMovies
}