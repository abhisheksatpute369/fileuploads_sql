const {Sequelize, DataTypes} = require('sequelize');
const Photos = require("../model/photoupload.model");

const sequalize = new Sequelize('fileuploads', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
}
);

const db = {};

// putting models into db object 
db.sequalize = sequalize;
db.Photos = Photos(sequalize, DataTypes);


db.sequalize.sync({force:false}).then(() => {
    console.log(`synchronized to data base`);
  });


module.exports = db;