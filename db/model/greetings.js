module.exports = (sequelize, DataTypes) => {
	return sequelize.define('greetings', {
		REC_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		SERVER_ID: {
			type: DataTypes.STRING
		},
		MOOD_ID: {
			type: DataTypes.STRING
		},
		IMAGE_LINK: {
			type: DataTypes.TEXT
		},
		GREETING_TEXT: {
			type: DataTypes.TEXT
		}
	});
};
