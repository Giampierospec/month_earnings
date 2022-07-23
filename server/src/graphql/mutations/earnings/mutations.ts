// import { EarningsGroupType, EarningsType } from '../../queries/earnings/types'
import { gql } from 'apollo-server-express'
import { checkIfLoggedIn } from '../../../services/auth'
import { createEarning, createEarningGroup } from '../../../services/earnings'
export const earningsMutations = gql`
	type Mutation {
		"Creates a new earning associated to an Earning Group"
		createEarning(input: CreateEarningInput!): Earnings @auth
		"Creates an Earning Group"
		createEarningGroup(input: CreateEarningGroupInput!): EarningsGroup @auth
	}
`
export const earningMutationsResolvers = {
	createEarning: async (source: any, args: any, context: any) => {
		return await createEarning({ ...args.input, userId: context.req.userId })
	},
	createEarningGroup: async (source: any, args: any, context: any) => {
		return await createEarningGroup({
			...args.input,
			userId: context.req.userId,
		})
	},
}
