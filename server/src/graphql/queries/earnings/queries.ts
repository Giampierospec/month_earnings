import * as graphql from 'graphql'

import { checkIfLoggedIn } from '../../../services/auth'
import { getEarningGroups, getEarnings } from '../../../services/earnings'
import { EarningsGroupType, EarningsType } from './types'
export default {
	getEarnings: {
		name: 'getEarnings',
		description: 'Gets all the earnings associated to an earningGroup',
		type: new graphql.GraphQLList(EarningsType),
		args: {
			earningGroupId: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
		},
		resolve: async (_: any, args: any, context: any) => {
			checkIfLoggedIn(context)
			return await getEarnings(context?.userId, args.earningGroupId)
		},
	},
	getEarningGroups: {
		name: 'getEarningGroups',
		description: 'Gets the earningGroups with the earnings',
		type: new graphql.GraphQLList(EarningsGroupType),
		resolve: async (_: any, args: any, context: any) => {
			checkIfLoggedIn(context)
			return await getEarningGroups(context.userId)
		},
	},
}
