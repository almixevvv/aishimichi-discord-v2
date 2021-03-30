module.exports = (sequelize, DataTypes) => {
	return sequelize.define('members', {
		REC_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		MEMBER_ID: {
			type: DataTypes.STRING
		},
		MEMBER_TAG: {
			type: DataTypes.STRING
		},
		MEMBER_LEVEL: {
			type: DataTypes.INTEGER
		},
		MEMBER_EXP: {
			type: DataTypes.INTEGER
		},
		CURRENT_ROLE: {
			type: DataTypes.STRING
		},
		ROLE_ID: {
			type: DataTypes.STRING
		}
	});
};
