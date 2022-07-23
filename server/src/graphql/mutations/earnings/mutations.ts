// import { EarningsGroupType, EarningsType } from '../../queries/earnings/types'
import { gql } from 'apollo-server-express'
import { checkIfLoggedIn } from '../../../services/auth'
import { createEarning, createEarningGroup } from '../../../services/earnings'
export const earningsMutations = gql`
	type Mutation {
		createEarning(input: CreateEarningInput!): Earnings @auth
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
