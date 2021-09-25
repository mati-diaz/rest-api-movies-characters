const { DataTypes } = require('sequelize');
const { db } = require('../database/db');

const Genre = db.define('Genre', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Genre;