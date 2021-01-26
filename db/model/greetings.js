module.exports = (sequelize, DataTypes) => {
	return sequelize.define('greetings', {
		REC_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		MOOD_ID: {
			type: DataTypes.STRING
		},
		GREETING_TEXT: {
			type: DataTypes.STRING
		}
	});
};
