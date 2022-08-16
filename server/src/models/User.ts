import {
	CreationOptional,
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
	NonAttribute,
} from 'sequelize'
import { sequelize } from '../db/connection'
import { genPassword } from '../utils/password'
import Roles from './Roles'
class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
	declare id: CreationOptional<number>
	declare firstName: string
	declare lastName: string
	declare email: string
	declare password: string
	declare jsonwebtoken: CreationOptional<string>
	declare created_at: CreationOptional<Date>
	declare roleId: number
	declare role?: NonAttribute<Roles>
}
User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
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
User.beforeCreate(async (user) => {
	user.password = await genPassword(user.password)
})
User.beforeSave(async (user) => {
	user.password = await genPassword(user.password)
})
User.beforeUpdate(async (user) => {
	user.password = await genPassword(user.password)
})
User.belongsTo(Roles, {
	as: 'role',
	foreignKey: 'roleId',
})

export default User
