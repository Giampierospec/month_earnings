import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/connection'
import Earnings from './Earnings'

class EarningConcepts extends Model {}

EarningConcepts.init(
	{
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
