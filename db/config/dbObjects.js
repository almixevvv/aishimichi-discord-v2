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
const Image = require('../model/greetImage')(sequelize, Sequelize.DataTypes);
const Mood = require('../model/mood')(sequelize, Sequelize.DataTypes);
const Text = require('../model/greetText')(sequelize, Sequelize.DataTypes);
const Greet = require('../model/greetings')(sequelize, Sequelize.DataTypes);

Tags.belongsTo(Servers, { foreignKey: 'SERVER_ID', as: 'SERVER' });

Mood.belongsTo(Servers, { foreignKey: 'SERVER_ID', as: 'SERVER' });

Image.belongsTo(Servers, { foreignKey: 'SERVER_ID', as: 'SERVER' });
Image.belongsTo(Mood, { foreignKey: 'REC_ID', as: 'M_ID' });

Text.belongsTo(Servers, { foreignKey: 'SERVER_ID', as: 'SERVER' });
Text.belongsTo(Mood, { foreignKey: 'REC_ID', as: 'M_ID' });

// Greet.belongsTo(Servers, { foreignKey: 'SERVER_ID', as: 'SERVER' });
// Greet.belongsTo(Mood, { foreignKey: 'REC_ID', as: 'MOOD_ID' });
// Greet.belongsTo(Image, { foreignKey: 'IMAGE_LINK', as: 'IMAGE_LINK' });
// Greet.belongsTo(Text, { foreignKey: 'REC_ID', as: 'TEXT_ID' });

module.exports = { Servers, Tags, Image, Mood, Text, Greet };
