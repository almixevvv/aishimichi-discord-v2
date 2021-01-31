module.exports = (sequelize, DataTypes) => {
	return sequelize.define('servers', {
		REC_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		NAME: {
			type: DataTypes.STRING
		},
		DEFAULT_CHANNEL: DataTypes.TEXT,
		VOICE_CHANNEL: DataTypes.TEXT,
		CHANNEL_ID: {
			type: DataTypes.TEXT,
			defaultValue: 0,
			allowNull: true
		}
	});
};
