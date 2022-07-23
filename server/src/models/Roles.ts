import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/connection'
import User from './User'

class Roles extends Model {}
Roles.init(
	{
		role: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		timestamps: false,
		tableName: 'roles',
	}
)
export default Roles
