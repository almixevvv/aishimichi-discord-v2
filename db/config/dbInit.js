const { Sequelize } = require('sequelize');
const crypto = require('crypto');

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	//SQLite Only
	storage: 'aishimichi.sqlite'
});

require('../model/servers')(sequelize, Sequelize.DataTypes);
require('../model/tags')(sequelize, Sequelize.DataTypes);
require('../model/mood')(sequelize, Sequelize.DataTypes);
require('../model/greetImage')(sequelize, Sequelize.DataTypes);
require('../model/greetings')(sequelize, Sequelize.DataTypes);
require('../model/voice')(sequelize, Sequelize.DataTypes);
require('../model/member')(sequelize, Sequelize.DataTypes);
require('../model/memberList')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize
	.sync({ force })
	.then(async () => {
		console.log('database sync');
		sequelize.close();
	})
	.catch(console.error);
