import { DataTypes } from 'sequelize'
import { Migration } from '../connection'

export const up: Migration = ({ context: queryInterface }) =>
	queryInterface.createTable('earnings', {
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
			references: {
				model: 'users',
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
	})
export const down: Migration = ({ context: queryInterface }) =>
	queryInterface.dropTable('earnings')
