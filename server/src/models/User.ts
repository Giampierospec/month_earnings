import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/connection'
import { genPassword } from '../utils/password'
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
		tableName: 'users',
		timestamps: false,
	}
)
User.beforeCreate(async (user: any) => {
	user.password = await genPassword(user.password)
})

export default User
