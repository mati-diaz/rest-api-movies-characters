const { Sequelize } = require('sequelize');
const { HOST, DB_USER, DB_PASSWORD } = process.env

const db = new Sequelize('disney_app', DB_USER, DB_PASSWORD,  {
    host: HOST,
    dialect: 'mysql',
    logging: false,
});

module.exports = {
    db
}