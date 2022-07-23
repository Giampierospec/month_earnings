// import { createUserInput, loginInput, loginResponse } from './types'
// import * as graphql from 'graphql'
// import User from '../../../models/User'
// import {
// 	checkIfAlreadyloggedIn,
// 	createUser,
// 	login,
// } from '../../../services/auth'
// import { userType } from '../../queries/users/types'

import { gql } from 'apollo-server-core'
import User from '../../../models/User'
import {
	checkIfAlreadyloggedIn,
	createUser,
	login,
} from '../../../services/auth'
import { generateToken } from '../../../utils/helpers'
export const userMutations = gql`
	type Mutation {
		login(input: LoginInput!): User
		createUser(input: CreateUserInput!): User
		logout: User
	}
`
export const userMutationsResolvers = {
	login: async (_: any, args: any, context: any) => {
		checkIfAlreadyloggedIn(context.req)
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
	createUser: async (source: any, args: any, context: any) => {
		const user = (await createUser(args.input)) as any
		const { token } = generateToken(user.id, user.email)
		context.res.setHeader('Set-Cookie', `Earning-Auth-Token=${token}`)
		return user
	},
	logout: async (_: any, args: any, context: any) => {
		context.res.clearCookie('Earning-Auth-Token')
	},
}
