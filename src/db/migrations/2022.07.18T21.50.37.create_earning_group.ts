import { DataTypes } from 'sequelize'
import { Migration } from '../connection'

export const up: Migration = ({ context: queryInterface }) =>
	queryInterface.createTable('earning_group', {
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
	})
export const down: Migration = ({ context: queryInterface }) =>
	queryInterface.dropTable('earning_group')
