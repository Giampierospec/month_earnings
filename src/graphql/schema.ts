import { directives } from './directives'
import { generalTypes } from './general'
import { mutationResolvers, mutations, mutationTypes } from './mutations'
// import mutations from './mutations'
import { queries, queriesResolvers, queryTypes } from './queries'

// const QueryType = new GraphQLObjectType({
// 	name: 'Query',
// 	fields: { ...queries },
// })
export const TypeDefs = [
	...generalTypes,
	...queryTypes,
	...queries,
	...mutations,
	...mutationTypes,
	...directives,
]
export const Resolvers = {
	...queriesResolvers,
	...mutationResolvers,
}

// const MutationType = new GraphQLObjectType({
// 	name: 'Mutation',
// 	fields: { ...mutations },
// })
