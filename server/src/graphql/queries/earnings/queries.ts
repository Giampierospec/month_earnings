import * as graphql from 'graphql'

import Earnings from '../../../models/Earnings'
import { checkIfLoggedIn } from '../../../services/auth'
import { getEarnings } from '../../../services/earnings'
import { EarningsType } from './types'
export default {
	getEarnings: {
		name: 'getEarnings',
		description: 'Gets all the earnings',
		type: new graphql.GraphQLList(EarningsType),
		resolve: async (_: any, args: any, context: any) => {
			checkIfLoggedIn(context)
			return await getEarnings(context?.userId)
		},
	},
}
