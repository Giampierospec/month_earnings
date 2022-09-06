import { DataTypes } from 'sequelize'
import { Migration } from '../connection'

export const up: Migration = ({ context: queryInterface }) =>
	queryInterface.createTable('reset_password', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
		token: {
			type: DataTypes.STRING,
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
	queryInterface.dropTable('reset_password', {
		cascade: true,
	})
