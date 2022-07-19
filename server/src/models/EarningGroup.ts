import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db/connection'

class EarningGroup extends Model {}

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
