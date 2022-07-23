import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/connection'
import { genPassword } from '../utils/password'
import Roles from './Roles'
class User extends Model {}
User.init(
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
			references: {
				model: 'roles',
				key: 'id',
			},
		},
	},
	{
		sequelize,
		scopes: {
			serializeScope: {
				attributes: {
					exclude: ['password'],
				},
			},
		},
		modelName: 'User',
		tableName: 'users',
		timestamps: false,
	}
)
User.beforeCreate(async (user: any) => {
	user.password = await genPassword(user.password)
})
User.belongsTo(Roles, {
	foreignKey: 'roleId',
})

export default User
