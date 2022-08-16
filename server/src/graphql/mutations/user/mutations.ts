import { gql } from 'apollo-server-core'
import User from '../../../models/User'
import { createUser, login } from '../../../services/auth'
import { generateToken } from '../../../utils/helpers'
export const userMutations = gql`
	type Mutation {
		"Logins the user"
		login(input: LoginInput!): User @auth(checkIfAlreadyLoggedIn: true)
		"Creates a new user"
		createUser(input: CreateUserInput!): User
		logout: User @auth
	}
`
export const userMutationsResolvers = {
	login: async (_: any, args: any, context: any) => {
		// checkIfAlreadyloggedIn(context.req)
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
		const user = await createUser(args.input)
		const { token } = generateToken(user.id, user.email)
		context.res.setHeader('Set-Cookie', `Earning-Auth-Token=${token}`)
		return user
	},
	logout: async (_: any, args: any, context: any) => {
		context.res.clearCookie('Earning-Auth-Token')
	},
}
