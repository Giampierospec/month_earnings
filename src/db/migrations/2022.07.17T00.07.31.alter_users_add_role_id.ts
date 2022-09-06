import { Migration } from '../connection'
import { DataTypes } from 'sequelize'
export const up: Migration = ({ context: queryInterface }) =>
	queryInterface.addColumn('users', 'roleId', {
		type: DataTypes.INTEGER,
		references: {
			key: 'id',
			model: 'roles',
		},
	})
export const down: Migration = ({ context: queryInterface }) =>
	queryInterface.removeColumn('users', 'roleId')
