module.exports = (sequelize, DataTypes) => {
	return sequelize.define('servers', {
		REC_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		NAME: {
			type: DataTypes.STRING
		},
		SERVER_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		CHANNEL_ID: {
			type: DataTypes.TEXT,
			defaultValue: 0,
			allowNull: true
		},
		MEMBER_COUNT: {
			type: DataTypes.TEXT,
			defaultValue: 0,
			allowNull: true
		}
	});
};
