module.exports = (sequelize, DataTypes) => {
	return sequelize.define('greet_image', {
		REC_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		MOOD_ID: {
			type: DataTypes.STRING
		},
		IMAGE_LINK: {
			type: DataTypes.TEXT
		}
	});
};
