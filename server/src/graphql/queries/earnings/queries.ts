import { gql } from 'apollo-server-express'
import { checkIfLoggedIn } from '../../../services/auth'
import { getEarningGroups, getEarnings } from '../../../services/earnings'

export const earningQueries = gql`
	type Query {
		"Gets the earnings by earningGroupId"
		getEarnings(earningGroupId: Int!): [Earnings] @auth
		"Gets the earnings group with their earnings"
		getEarningGroups: [EarningsGroup] @auth
	}
`
export const earningQueryResolvers = {
	getEarnings: async (source: any, args: any, context: any) => {
		// checkIfLoggedIn(context.req)
		return await getEarnings(context?.req?.userId, args.earningGroupId)
	},
	getEarningGroups: async (source: any, args: any, context: any) => {
		// checkIfLoggedIn(context.req)
		return await getEarningGroups(context?.req?.userId)
	},
}
