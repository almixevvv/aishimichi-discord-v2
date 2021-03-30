module.exports = (sequelize, DataTypes) => {
	return sequelize.define('memberlist', {
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
		SERVER_ID: {
			type: DataTypes.STRING
		}
	});
};
