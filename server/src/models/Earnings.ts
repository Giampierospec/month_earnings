import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/connection'
import EarningConcepts from './EarningConcepts'

class Earnings extends Model {}
Earnings.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
		currency: {
			type: DataTypes.ENUM('USD', 'DOP', 'EUR'),
			defaultValue: 'DOP',
		},
		month_earnings: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		spent_in_month: {
			type: DataTypes.DOUBLE,
		},
		month: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		userId: {
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
		sequelize,
		tableName: 'earnings',
		timestamps: false,
	}
)
export default Earnings
