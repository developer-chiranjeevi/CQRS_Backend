const {Sequelize, DataTypes} = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
  });
  
const db = {};
  
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.User = require('./customer')(sequelize, DataTypes);
db.Order = require('./orders')(sequelize, DataTypes);

module.exports = db;
