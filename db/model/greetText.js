module.exports = (sequelize, DataTypes) => {
	return sequelize.define('greet_text', {
		REC_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		SERVER_ID: {
			type: DataTypes.STRING
		},
		GREETING_TEXT: {
			type: DataTypes.TEXT
		}
	});
};
