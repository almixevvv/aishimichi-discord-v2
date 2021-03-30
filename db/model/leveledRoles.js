module.exports = (sequelize, DataTypes) => {
	return sequelize.define('leveled_roles', {
		REC_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		ROLE_NAME: {
			type: DataTypes.TEXT
		},
		ROLE_LEVEL: {
			type: DataTypes.INTEGER
		},
		ROLE_EXP_REQUIREMENTS: {
			type: DataTypes.INTEGER
		}
	});
};
