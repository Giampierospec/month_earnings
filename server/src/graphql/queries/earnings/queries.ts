import { gql } from 'apollo-server-express'
import { checkIfLoggedIn } from '../../../services/auth'
import { getEarningGroups, getEarnings } from '../../../services/earnings'

export const earningQueries = gql`
	type Query {
		"Gets the earnings by earningGroupId"
		getEarnings(
			earningGroupId: Int!
			first: Int!
			page: Int
		): EarningsPaginator @auth
		"Gets the earnings group with their earnings"
		getEarningGroups(first: Int!, page: Int): EarningsGroupPaginator @auth
	}
`
export const earningQueryResolvers = {
	getEarnings: async (source: any, args: any, context: any) => {
		// checkIfLoggedIn(context.req)
		return await getEarnings(context?.req?.user?.id, { ...args })
	},
	getEarningGroups: async (source: any, args: any, context: any) => {
		// checkIfLoggedIn(context.req)
		return await getEarningGroups(context?.req?.user?.id, { ...args })
	},
}
