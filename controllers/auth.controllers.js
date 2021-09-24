

const register = (req, res) => {
    res.json({
        msg: 'Register'
    });
}

const login = (req, res) => {
    res.json({
        msg: 'Login'
    });
}

module.exports = {
    register,
    login
}