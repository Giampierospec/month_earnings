import { sequelize } from '../db/connection'
import Roles from '../models/Roles'
import User from '../models/User'
import { genPassword } from './password'
;(async () => {
	if (!(await Roles.count())) {
		console.log('Im getting here')
		await Roles.bulkCreate([
			{
				role: 'super-admin',
			},
			{
				role: 'admin',
			},
			{
				role: 'normal',
			},
		])
	}
	if (!(await User.count())) {
		await User.create({
			firstName: 'Admin',
			lastName: 'Admin',
			email: 'admin@example.com',
			password: await genPassword('Letmein@1'),
			roleId: 1,
		})
	}
})()
