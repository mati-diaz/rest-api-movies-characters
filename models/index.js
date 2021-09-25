const Character = require("./Character");
const Movie = require("./Movie");
const Genre = require("./Genre");
const { db } = require("../database/db");

Character.belongsToMany(Movie, { through: "Characters_Movies" });
Movie.belongsToMany(Character, { through: "Characters_Movies" });

Genre.hasMany(Movie);
Movie.belongsTo(Genre);

db.sync();

module.exports = {
    Movie,
    Character,
    Genre
}