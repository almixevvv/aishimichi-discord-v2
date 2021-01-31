module.exports = (sequelize, DataTypes) => {
	return sequelize.define('mood', {
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
		COLOR: {
			type: DataTypes.STRING
		}
	});
};
