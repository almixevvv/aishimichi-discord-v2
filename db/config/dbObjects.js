const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	//SQLite Only
	storage: 'aishimichi.sqlite'
});

const Servers = require('../model/servers')(sequelize, Sequelize.DataTypes);
const Tags = require('../model/tags')(sequelize, Sequelize.DataTypes);

module.exports = { Servers, Tags };
