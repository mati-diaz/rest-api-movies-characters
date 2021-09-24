

const getMovies = (req, res) => {
    res.json({
        msg: 'Obtaining Movies...'
    });
}

const getMovieById = (req, res) => {
    res.json({
        msg: 'Obtaining Movie...'
    });
}

const createMovie = (req, res) => {
    res.json({
        msg: 'Creating Movie...'
    });
}

const updateMovie = (req, res) => {
    res.json({
        msg: 'Updating Movie...'
    });
}

const deleteMovie = (req, res) => {
    res.json({
        msg: 'Deleting Movie...'
    });
}

module.exports = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}