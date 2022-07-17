import { Migration } from '../connection'
import { DataTypes, Sequelize } from 'sequelize'
export const up: Migration = ({ context: queryInterface }) =>
	queryInterface.createTable('roles', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	})
export const down: Migration = ({ context: queryInterface }) =>
	queryInterface.dropTable('roles')
