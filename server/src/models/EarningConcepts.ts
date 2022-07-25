import {
	CreationOptional,
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
} from 'sequelize'
import { sequelize } from '../db/connection'
import Earnings from './Earnings'

class EarningConcepts extends Model<
	InferAttributes<EarningConcepts>,
	InferCreationAttributes<EarningConcepts>
> {
	declare id: CreationOptional<number>
	declare concept: string
	declare amount: number
	declare earnings_id: number
	declare created_at: CreationOptional<Date>
	declare updated_at: CreationOptional<Date>
}

EarningConcepts.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
		concept: {
			type: DataTypes.STRING,
		},
		amount: {
			type: DataTypes.DOUBLE,
		},
		earnings_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'earnings',
				key: 'id',
			},
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: new Date(),
		},
		updated_at: {
			type: DataTypes.DATE,
			defaultValue: new Date(),
		},
	},
	{
		sequelize,
		timestamps: false,
		tableName: 'earning_concepts',
	}
)

export default EarningConcepts
