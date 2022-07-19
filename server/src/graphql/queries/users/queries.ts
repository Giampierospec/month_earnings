import * as graphql from 'graphql'
import User from '../../../models/User'
import { checkIfLoggedIn } from '../../../services/auth'
import { userType } from './types'

export const userQueries = {
	me: {
		name: 'me',
		type: userType,
		description: 'User query',
		resolve: async (_: any, args: any, context: any) => {
			checkIfLoggedIn(context)
			return await User.findOne({
				where: {
					id: context.userId,
				},
			})
		},
	},
}
