import * as graphql from 'graphql'
export const userType = new graphql.GraphQLObjectType({
	name: 'User',
	description: 'User Type Object',
	fields: {
		id: { type: graphql.GraphQLInt },
		name: { type: graphql.GraphQLString },
		email: { type: graphql.GraphQLString },
	},
})

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
