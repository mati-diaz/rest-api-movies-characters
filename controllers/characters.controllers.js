

const getCharacters = (req, res) => {
    res.json({
        msg: 'Obtaining Characters...'
    });
}

const getCharacterById = (req, res) => {
    res.json({
        msg: 'Obtaining Character...'
    });
}

const createCharacter = (req, res) => {
    res.json({
        msg: 'Creating Character...'
    });
}

const updateCharacter = (req, res) => {
    res.json({
        msg: 'Updating Character...'
    });
}

const deleteCharacter = (req, res) => {
    res.json({
        msg: 'Deleting Character...'
    });
}

module.exports = {
    getCharacters,
    getCharacterById,
    createCharacter,
    updateCharacter,
    deleteCharacter
}