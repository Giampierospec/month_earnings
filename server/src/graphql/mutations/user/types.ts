import * as graphql from 'graphql'
import { baseUser } from '../../queries/users/types'

export const loginResponse = new graphql.GraphQLObjectType({
	name: 'LoginResponse',
	fields: {
		token: { type: graphql.GraphQLString },
		userId: { type: graphql.GraphQLInt },
	},
})
export const createUserInput = new graphql.GraphQLInputObjectType({
	name: 'CreateUserInput',
	fields: {
		...baseUser,
		password: { type: graphql.GraphQLString },
	},
})
export const loginInput = new graphql.GraphQLInputObjectType({
	name: 'LoginInput',
	fields: {
		email: {
			type: graphql.GraphQLString,
		},
		password: {
			type: graphql.GraphQLString,
		},
	},
})
