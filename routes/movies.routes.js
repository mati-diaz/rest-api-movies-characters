const { Router } = require("express");
const { createMovie, getMovies, getMovieById, updateMovie, deleteMovie } = require("../controllers/movies.controllers");

const router = Router();

router.post('/', createMovie);

router.get('/', getMovies);

router.get('/:id', getMovieById);

router.put('/:id', updateMovie);

router.delete('/:id', deleteMovie);

module.exports = router;