const { Router } = require("express");
const { searchCharacters, searchMovies } = require("../controllers/search.controllers");

const router = Router();

router.get('/characters', searchCharacters);

router.get('/movies', searchMovies);

module.exports = router;