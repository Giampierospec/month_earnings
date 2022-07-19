import * as graphql from 'graphql'

export const loginResponse = new graphql.GraphQLObjectType({
	name: 'LoginResponse',
	fields: {
		token: { type: graphql.GraphQLString },
		userId: { type: graphql.GraphQLInt },
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
