import * as graphql from 'graphql'
import { resolve } from 'path'
import EarningConcepts from '../../../models/EarningConcepts'
import Earnings from '../../../models/Earnings'
import User from '../../../models/User'
import { userType } from '../users/types'

export const CurrencyEnum = new graphql.GraphQLEnumType({
	name: 'CurrencyEnum',
	values: {
		USD: { value: 'USD' },
		DOP: { value: 'DOP' },
		EUR: { value: 'EUR' },
	},
})

export const EarningConceptsType = new graphql.GraphQLObjectType({
	name: 'EarningConcepts',
	fields: {
		concept: {
			type: graphql.GraphQLString,
		},
		amount: {
			type: graphql.GraphQLFloat,
		},
		earnings_id: {
			type: graphql.GraphQLInt,
		},
	},
})
export const EarningsType = new graphql.GraphQLObjectType({
	name: 'Earnings',
	fields: {
		id: {
			type: graphql.GraphQLInt,
		},
		currency: {
			type: CurrencyEnum,
		},
		month_earnings: {
			type: graphql.GraphQLFloat,
		},
		spent_in_month: {
			type: graphql.GraphQLFloat,
		},
		month: {
			type: graphql.GraphQLString,
		},
		year: {
			type: graphql.GraphQLInt,
		},
		userId: {
			type: graphql.GraphQLInt,
		},
		concepts: {
			type: new graphql.GraphQLList(EarningConceptsType),
			resolve: async (obj) => {
				return await EarningConcepts.findAll({
					where: {
						earnings_id: obj.id,
					},
				})
			},
		},
		user: {
			type: userType,
			resolve: async (obj) => {
				return await User.findOne({
					where: {
						id: obj.userId,
					},
				})
			},
		},
	},
})

export const EarningsGroupType = new graphql.GraphQLObjectType({
	name: 'EarningsGroupType',
	fields: {
		id: { type: graphql.GraphQLInt },
		name: { type: graphql.GraphQLString },
		earnings: {
			type: new graphql.GraphQLList(EarningsType),
			resolve: async (obj) => {
				return await Earnings.findAll({
					where: {
						earning_group_id: obj?.id,
					},
				})
			},
		},
	},
})
