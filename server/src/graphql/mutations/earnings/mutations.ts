import { checkIfLoggedIn } from '../../../services/auth'
import {
	EarningsGroupType,
	EarningsGroupTypeReduced,
	EarningsType,
} from '../../queries/earnings/types'
import {
	AddToEarningGroupInput,
	CreateEarningGroupInput,
	CreateEarningInput,
} from './types'
import * as graphql from 'graphql'
import {
	addToEarningGroup,
	createEarning,
	createEarningGroup,
} from '../../../services/earnings'

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
	createEarningGroup: {
		type: EarningsGroupTypeReduced,
		description: 'Add new Earning Group',
		args: {
			input: { type: new graphql.GraphQLNonNull(CreateEarningGroupInput) },
		},
		resolve: async (_: any, args: any, context: any) => {
			checkIfLoggedIn(context)
			return await createEarningGroup({ ...args.input, userId: context.userId })
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
