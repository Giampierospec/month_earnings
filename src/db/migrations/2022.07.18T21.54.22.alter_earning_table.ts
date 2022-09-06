import { DataTypes } from 'sequelize'
import { Migration } from '../connection'

export const up: Migration = ({ context: queryInterface }) =>
	queryInterface.addColumn('earnings', 'earning_group_id', {
		type: DataTypes.INTEGER,
		references: {
			model: 'earning_group',
			key: 'id',
		},
	})
export const down: Migration = ({ context: queryInterface }) =>
	queryInterface.removeColumn('earnings', 'earning_group_id')
