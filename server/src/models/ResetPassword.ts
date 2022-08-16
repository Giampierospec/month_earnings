import {
	CreationOptional,
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
} from 'sequelize'
import { sequelize } from '../db/connection'

class ResetPassword extends Model<
	InferAttributes<ResetPassword>,
	InferCreationAttributes<ResetPassword>
> {
	declare id: CreationOptional<number>
	declare token: string
	declare userId: number
}
ResetPassword.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
		token: {
			type: DataTypes.STRING,
			defaultValue: '',
		},
		userId: {
			type: DataTypes.INTEGER,
		},
	},
	{
		sequelize,
		tableName: 'reset_password',
		timestamps: false,
	}
)
export default ResetPassword
