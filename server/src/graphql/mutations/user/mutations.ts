import { createUserInput, loginInput, loginResponse } from './types'
import * as graphql from 'graphql'
import User from '../../../models/User'
import {
	checkIfAlreadyloggedIn,
	createUser,
	login,
} from '../../../services/auth'
import { userType } from '../../queries/users/types'
import { generateToken } from '../../../utils/helpers'

export const userMutations = {
	login: {
		type: userType,
		args: {
			input: { type: new graphql.GraphQLNonNull(loginInput) },
		},
		description: 'Logins the user',
		resolve: async (_: any, args: any, context: any) => {
			checkIfAlreadyloggedIn(context)
			const loginResponse = await login(args.input)
			context.res.setHeader(
				'Set-Cookie',
				`Earning-Auth-Token=${loginResponse.token}`
			)

			return await User.findOne({
				where: {
					email: args?.input?.email,
				},
			})
		},
	},
	createUser: {
		type: userType,
		description: 'Creates a new user',
		args: {
			input: { type: new graphql.GraphQLNonNull(createUserInput) },
		},
		resolve: async (_: any, args: any, context: any) => {
			const user = (await createUser(args.input)) as any
			const { token } = generateToken(user.id, user.email)
			context.res.setHeader('Set-Cookie', `Earning-Auth-Token=${token}`)
			return user
		},
	},
	logout: {
		type: userType,
		description: 'Logs out the user',
		resolve: (_: any, args: any, context: any) => {
			context.res.clearCookie('Earning-Auth-Token')
		},
	},
}
