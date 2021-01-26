module.exports = (sequelize, DataTypes) => {
	return sequelize.define('mood', {
		REC_ID: {
			type: DataTypes.STRING,
			unique: true
		},
		NAME: {
			type: DataTypes.STRING
		},
		COLOR: {
			type: DataTypes.STRING
		}
	});
};
