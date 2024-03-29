import { gql } from 'apollo-server-express'
import User from '../../../models/User'
import { checkIfLoggedIn } from '../../../services/auth'

export const userQueries = gql`
	type Query {
		"Gets the current user"
		me: User @auth
	}
`
export const userQueryResolvers = {
	me: async (_: any, args: any, context: any) => {
		// checkIfLoggedIn(context.req)
		return await User.findOne({
			where: {
				id: context.req.user?.id,
			},
		})
	},
}
