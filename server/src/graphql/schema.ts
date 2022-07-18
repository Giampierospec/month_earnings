import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import mutations from './mutations'
import { queries } from './queries'

const QueryType = new GraphQLObjectType({
	name: 'Query',
	fields: { ...queries },
})

const MutationType = new GraphQLObjectType({
	name: 'Mutation',
	fields: { ...mutations },
})

export const schema = new GraphQLSchema({
	query: QueryType,
	mutation: MutationType,
})
