const { Router } = require("express");
const { createMovie, getMovies, getMovieById, updateMovie, deleteMovie } = require("../controllers/movies.controllers");
const validateJWT = require("../middlewares/validateJWT");

const router = Router();

router.post('/', validateJWT, createMovie);

router.get('/', validateJWT, getMovies);

router.get('/:id', validateJWT, getMovieById);

router.put('/:id', validateJWT, updateMovie);

router.delete('/:id', validateJWT, deleteMovie);

module.exports = router;