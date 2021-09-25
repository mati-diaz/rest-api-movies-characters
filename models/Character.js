const { DataTypes } = require('sequelize');
const { db } = require('../database/db');
const Movie = require("../models/Movie");

const Character = db.define('Character', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false
    },
    history: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Character;