import {
	Association,
	CreationOptional,
	DataTypes,
	HasManyGetAssociationsMixin,
	HasManyHasAssociationMixin,
	InferAttributes,
	InferCreationAttributes,
	Model,
	NonAttribute,
} from 'sequelize'
import { sequelize } from '../db/connection'
import User from './User'

class Roles extends Model<
	InferAttributes<Roles>,
	InferCreationAttributes<Roles>
> {
	declare id: CreationOptional<number>
	declare role: string
	declare users: NonAttribute<User[]>
}
Roles.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
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
