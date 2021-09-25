const { Router } = require("express");
const { getCharacters, getCharacterById, createCharacter, updateCharacter, deleteCharacter } = require("../controllers/characters.controllers");
const validateJWT = require("../middlewares/validateJWT");

const router = Router();

router.post('/', validateJWT, createCharacter);

router.get('/', validateJWT, getCharacters);

router.get('/:id', validateJWT, getCharacterById);

router.put('/:id', validateJWT, updateCharacter);

router.delete('/:id', validateJWT, deleteCharacter);

module.exports = router;