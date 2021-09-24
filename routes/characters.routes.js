const { Router } = require("express");
const { getCharacters, getCharacterById, createCharacter, updateCharacter, deleteCharacter } = require("../controllers/characters.controllers");

const router = Router();

router.post('/', createCharacter);

router.get('/', getCharacters);

router.get('/:id', getCharacterById);

router.put('/:id', updateCharacter);

router.delete('/:id', deleteCharacter);

module.exports = router;