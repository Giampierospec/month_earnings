import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/connection'
import Earnings from './Earnings'

const EarningConcepts = sequelize.define(
	'EarningConcepts',
	{
		concept: {
			type: DataTypes.STRING,
		},
		amount: {
			type: DataTypes.DOUBLE,
		},
		earnings_id: {
			type: DataTypes.INTEGER,
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
		timestamps: false,
		tableName: 'earning_concepts',
	}
)

export default EarningConcepts
