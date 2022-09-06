import { earningQueries, earningQueryResolvers } from './earnings/queries'
import { earningTypeDefinitions, earningTypesResolvers } from './earnings/types'
import { userQueries, userQueryResolvers } from './users/queries'
import { userTypeDefinitions, userTypeResolvers } from './users/types'
export const queries = [earningQueries, userQueries]
export const queryTypes = [...earningTypeDefinitions, ...userTypeDefinitions]
export const queriesResolvers = {
	Query: {
		...userQueryResolvers,
		...earningQueryResolvers,
	},
	...userTypeResolvers,
	...earningTypesResolvers,
}
