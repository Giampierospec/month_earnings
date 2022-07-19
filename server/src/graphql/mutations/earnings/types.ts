import * as graphql from 'graphql'
import { CurrencyEnum, EarningConceptsType } from '../../queries/earnings/types'

const ConceptsInput = new graphql.GraphQLInputObjectType({
	name: 'ConcepstInputType',
	fields: {
		concept: {
			type: graphql.GraphQLString,
		},
		amount: {
			type: graphql.GraphQLInt,
		},
	},
})
export const EarningsInput = new graphql.GraphQLInputObjectType({
	name: 'EarningsInput',
	fields: {
		id: { type: graphql.GraphQLInt },
	},
})

export const AddToEarningGroupInput = new graphql.GraphQLInputObjectType({
	name: 'AddToEarningGroupInput',
	fields: {
		name: { type: graphql.GraphQLString },
		earnings: {
			type: new graphql.GraphQLNonNull(new graphql.GraphQLList(EarningsInput)),
		},
	},
})
export const CreateEarningInput = new graphql.GraphQLInputObjectType({
	name: 'CreateEarningInput',
	fields: {
		currency: {
			type: CurrencyEnum,
		},
		month_earnings: {
			type: graphql.GraphQLFloat,
		},
		month: {
			type: graphql.GraphQLString,
		},
		year: {
			type: graphql.GraphQLInt,
		},
		concepts: {
			type: new graphql.GraphQLNonNull(new graphql.GraphQLList(ConceptsInput)),
		},
	},
})
