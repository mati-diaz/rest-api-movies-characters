const { DataTypes, Sequelize } = require('sequelize');
const { db } = require('../database/db');

const Movie = db.define('Movie', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Movie;