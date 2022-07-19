import { loginInput, loginResponse } from './types'
import * as graphql from 'graphql'
import User from '../../../models/User'
import { checkIfAlreadyloggedIn, login } from '../../../services/auth'
import { userType } from '../../queries/users/types'

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
	logout: {
		type: userType,
		description: 'Logs out the user',
		resolve: (_: any, args: any, context: any) => {
			context.res.clearCookie('Earning-Auth-Token')
		},
	},
}
