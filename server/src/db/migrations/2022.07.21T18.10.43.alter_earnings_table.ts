import { DataTypes } from 'sequelize'
import { Migration } from '../connection'

export const up: Migration = ({ context: queryInterface }) =>
	queryInterface.changeColumn('earnings', 'month', {
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
	})
export const down: Migration = ({ context: queryInterface }) =>
	queryInterface.removeColumn('earnings', 'month')
