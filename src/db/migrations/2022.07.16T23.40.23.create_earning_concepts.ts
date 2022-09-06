import { DataTypes } from 'sequelize'
import { Migration } from '../connection'

export const up: Migration = ({ context: queryInterface }) =>
	queryInterface.createTable('earning_concepts', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
		concept: {
			type: DataTypes.STRING,
		},
		amount: {
			type: DataTypes.DOUBLE,
		},
		earnings_id: {
			type: DataTypes.INTEGER,
			references: { key: 'id', model: 'earnings' },
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
	queryInterface.dropTable('earning_concepts')
