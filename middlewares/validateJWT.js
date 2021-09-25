const jwt = require('jsonwebtoken');
const User = require('../models/User');

const validateJWT = async (req, res, next) => {
    const token = req.headers['x-token'];

    if(!token) {
        return res.status(403).json({
            msg: 'No token provided'
        });
    }

    try {
        const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const user = await User.findOne({where: { id }});
    
        if(!user) {
            res.status(401).json({
                msg: 'No user found'
            });
        }
    
        next();
    } catch (error) {
        console.log(error);

        res.status(401).json({
            msg: 'Invalid Token'
        });
    }
}

module.exports = validateJWT;