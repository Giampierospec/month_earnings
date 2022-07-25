import {
	CreationOptional,
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
} from 'sequelize'
import { sequelize } from '../db/connection'
import { CurrencyEnum, MonthEnum } from '../services/earnings'

class Earnings extends Model<
	InferAttributes<Earnings>,
	InferCreationAttributes<Earnings>
> {
	declare id: CreationOptional<number>
	declare currency: CurrencyEnum
	declare month_earnings: number
	declare month: MonthEnum
	declare spent_in_month: number
	declare year: number
	declare earning_group_id: number
	declare userId: number
	declare created_at: CreationOptional<Date>
	declare updated_at: CreationOptional<Date>
}
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
