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
		resolve: async (_: any, args: any, req: any) => {
			return await login(args.input)
		},
	},
}
