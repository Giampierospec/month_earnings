// import { EarningsGroupType, EarningsType } from '../../queries/earnings/types'
import { gql } from 'apollo-server-express'
import { checkIfLoggedIn } from '../../../services/auth'
import {
	createEarning,
	createEarningGroup,
	deleteEarning,
	deleteEarningGroup,
} from '../../../services/earnings'
export const earningsMutations = gql`
	type Mutation {
		"Creates a new earning associated to an Earning Group"
		createEarning(input: CreateEarningInput!): Earnings @auth
		"Creates an Earning Group"
		createEarningGroup(input: CreateEarningGroupInput!): EarningsGroup @auth
		"Deletes the earning"
		deleteEarning(id: Int!): Boolean! @auth

		"Deletes the earning group"
		deleteEarningGroup(id: Int!): Boolean! @auth
	}
`
export const earningMutationsResolvers = {
	createEarning: async (source: any, args: any, context: any) => {
		return await createEarning({ ...args.input, userId: context.req.user?.id })
	},
	createEarningGroup: async (source: any, args: any, context: any) => {
		return await createEarningGroup({
			...args.input,
			userId: context.req.user?.id,
		})
	},
	deleteEarning: async (source: any, args: any, context: any) => {
		return await deleteEarning({ id: args.id, user: context.req.user })
	},
	deleteEarningGroup: async (source: any, args: any, context: any) => {
		return await deleteEarningGroup({ id: args.id, user: context.req.user })
	},
}
