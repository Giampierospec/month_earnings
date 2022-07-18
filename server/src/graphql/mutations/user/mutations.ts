import { loginInput, loginResponse } from './types'
import * as graphql from 'graphql'
import User from '../../../models/User'
import { login } from '../../../services/auth'

export const userMutations = {
	login: {
		type: loginResponse,
		args: {
			input: { type: new graphql.GraphQLNonNull(loginInput) },
		},
		description: 'Logins the user',
		resolve: async (_: any, args: any, context: any) => {
			console.log('auth', context.isAuth)
			const loginResponse = await login(args.input)
			context.res.setHeader(
				'Set-Cookie',
				`Earning-Auth-Token=${loginResponse.token}`
			)
			// req.response.setCookie('x-auth-token', loginResponse.token)

			return loginResponse
		},
	},
}
