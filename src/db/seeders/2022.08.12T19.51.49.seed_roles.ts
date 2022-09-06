import { MigrationFn } from 'umzug'
import { Seeder } from '../connection'
const rolesSeed = [
	{
		role: 'super-admin',
	},
	{
		role: 'admin',
	},
	{
		role: 'normal',
	},
]
export const up: Seeder = async ({ context: queryInterface }) =>
	queryInterface.bulkInsert('roles', rolesSeed)

export const down: Seeder = async ({ context: queryInterface }) =>
	queryInterface.bulkDelete('roles', { role: rolesSeed.map((x) => x.role) })
