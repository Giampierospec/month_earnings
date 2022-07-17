import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/connection'
import Earnings from './Earnings'

const User = sequelize.define(
	'User',
	{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		jsonwebtoken: {
			type: DataTypes.STRING,
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: new Date(),
		},
		roleId: {
			type: DataTypes.INTEGER,
		},
	},
	{
		tableName: 'users',
		timestamps: false,
	}
)
User.hasMany(Earnings, {
	foreignKey: 'userId',
})
Earnings.belongsTo(User)

export default User
