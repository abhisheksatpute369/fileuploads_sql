const {Sequelize, DataTypes} = require('sequelize');

const sequalize = new Sequelize('fileuploads', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
}
);

const db = {};

// putting models into db object 
db.sequalize = sequalize;


module.exports = db;