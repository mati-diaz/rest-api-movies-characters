const User = require("../models/User");
const bcryptjs = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const register = async (req, res) => {
    const {email, password} = req.body;

    // Comprobar que se envien los datos necesarios
    if(!email || !password) {
        return res.status(400).json({
            msg: 'missing fields to complete'
        });
    }

    // Comprobar que no exista otro usuario con ese correo
    const oldUser = await User.findOne({ where: { email } });
    if(oldUser) {
        return res.status(400).json({
            msg: 'There is already a user with this email'
        });
    }

    const newUser = User.build({email, password});

    const salt = bcryptjs.genSaltSync(10);
    newUser.password = bcryptjs.hashSync(password, salt);

    await newUser.save();

    // Eviar email
    const msg = {
        to: newUser.email,
        from: process.env.SENDGRID_EMAIL,
        subject: 'Register to Disney App',
        text: 'Welcome to Disney App',
        html: '<strong>Welcome to Disney App</strong>',
    };

    sgMail.send(msg)
        .then(() => {}, error => {
            console.error(error);

            if (error.response) {
            console.error(error.response.body)
            }
        });


    res.json(newUser);
}

const login = async (req, res) => {
    const {email, password} = req.body;

    // Comprobar que se envien los datos necesarios
    if(!email || !password) {
        return res.status(400).json({
            msg: 'missing fields to complete'
        });
    }
    
    // Comprobar que el usuario exista
    const user = await User.findOne({ where: { email } });
    if(!user) {
        return res.status(400).json({msg: 'User Not Found'});
    }

    // Verificar que la contraseña sea correcta
    const matchPassword = bcryptjs.compareSync(password, user.password);

    if(!matchPassword) {
        return res.status(400).json({
            msg: 'Invalid Password'
        });
    }

    // Generar JWT
    const token = jwt.sign({id: user.id}, process.env.SECRETORPRIVATEKEY, {
        expiresIn: 86400
    });

    res.json({
        user,
        token
    });
}

module.exports = {
    register,
    login
}