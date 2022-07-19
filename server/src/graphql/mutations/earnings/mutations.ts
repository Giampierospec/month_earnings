import { checkIfLoggedIn } from '../../../services/auth'
import { EarningsGroupType, EarningsType } from '../../queries/earnings/types'
import { AddToEarningGroupInput, CreateEarningInput } from './types'
import * as graphql from 'graphql'
import { addToEarningGroup, createEarning } from '../../../services/earnings'

export const earningsMutations = {
	createEarning: {
		type: EarningsType,
		description: 'Create new earning',
		args: {
			input: { type: new graphql.GraphQLNonNull(CreateEarningInput) },
		},
		resolve: async (_: any, args: any, context: any) => {
			checkIfLoggedIn(context)
			const input = args.input
			return await createEarning({ ...input, userId: context.userId })
		},
	},
	addEarningToGroup: {
		type: EarningsGroupType,
		args: {
			input: { type: new graphql.GraphQLNonNull(AddToEarningGroupInput) },
		},
		resolve: async (_: any, args: any, context: any) => {
			checkIfLoggedIn(context)
			return await addToEarningGroup({ ...args.input, userId: context.userId })
		},
	},
}
