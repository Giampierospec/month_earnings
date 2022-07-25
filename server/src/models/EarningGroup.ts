import {
	CreationOptional,
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
} from 'sequelize'
import { sequelize } from '../db/connection'

class EarningGroup extends Model<
	InferAttributes<EarningGroup>,
	InferCreationAttributes<EarningGroup>
> {
	declare id: CreationOptional<number>
	declare name: string
	declare userId: number
}

EarningGroup.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		userId: {
			type: DataTypes.INTEGER,

			references: {
				model: 'users',
				key: 'id',
			},
		},
	},
	{
		sequelize,
		tableName: 'earning_group',
		timestamps: false,
	}
)
export default EarningGroup
