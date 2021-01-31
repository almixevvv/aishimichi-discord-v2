module.exports = (sequelize, DataTypes) => {
	return sequelize.define('tags', {
		REC_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		SERVER_ID: {
			type: DataTypes.STRING
		},
		NAME: {
			type: DataTypes.STRING
		},
		DESCRIPTION: DataTypes.TEXT,
		USERNAME: DataTypes.STRING,
		USAGE_COUNT: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false
		}
	});
};
