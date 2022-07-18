import * as graphql from 'graphql'
import User from '../../../models/User'
import { userType } from '../../mutations/user/types'

const CurrencyEnum = new graphql.GraphQLEnumType({
	name: 'CurrencyEnum',
	values: {
		USD: { value: 'USD' },
		DOP: { value: 'DOP' },
		EUR: { value: 'EUR' },
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
