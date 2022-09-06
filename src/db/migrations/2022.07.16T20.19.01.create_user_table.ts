import { Migration } from '../connection'
import { DataTypes, Sequelize } from 'sequelize'
export const up: Migration = ({ context: queryInterface }) =>
	queryInterface.createTable('users', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		jsonwebtoken: {
			type: DataTypes.STRING,
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: new Date(),
		},
	})
export const down: Migration = ({ context: queryInterface }) =>
	queryInterface.dropTable('users')
