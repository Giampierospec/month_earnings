import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/connection'
import User from './User'

const Roles = sequelize.define(
	'Roles',
	{
		role: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: false,
		tableName: 'roles',
	}
)
Roles.hasMany(User, {
	foreignKey: 'roleId',
})
User.belongsTo(Roles)

export default Roles
