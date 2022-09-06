import Roles from '../../models/Roles'
import { genPassword } from '../../utils/password'
import { Seeder } from '../connection'
const userSeed = {
	firstName: 'Admin',
	lastName: 'Admin',
	email: 'admin@example.com',
	password: 'Letmein@1',
	roleId: 1,
}
export const up: Seeder = async ({ context: queryInterface }) => {
	userSeed.password = await genPassword(userSeed.password)
	const role = await Roles.findOne({
		where: {
			role: 'super-admin',
		},
	})
	userSeed.roleId = role ? role.id : 1
	return queryInterface.bulkInsert('users', [userSeed])
}
export const down: Seeder = ({ context: queryInterface }) =>
	queryInterface.bulkDelete('users', { email: userSeed.email })
