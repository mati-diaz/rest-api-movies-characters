const { DataTypes } = require('sequelize');
const { db } = require('../database/db');

const User = db.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.sync();

module.exports = User;