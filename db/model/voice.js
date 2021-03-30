module.exports = (sequelize, DataTypes) => {
	return sequelize.define('voice', {
		REC_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		SERVER_ID: {
			type: DataTypes.STRING
		},
		MEMBER_ID: {
			type: DataTypes.TEXT
		},
		VOICE_NAME: DataTypes.TEXT,
		VOICE_LIMIT: DataTypes.INTEGER,
		USAGE_COUNT: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false
		}
	});
};
