import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/connection'
import EarningConcepts from './EarningConcepts'
import EarningGroup from './EarningGroup'

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
			type: DataTypes.ENUM(
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			),
			allowNull: false,
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		earning_group_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'earning_group_id',
				key: 'id',
			},
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
