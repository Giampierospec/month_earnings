// import { earningsMutations } from './earnings/mutations'
// import { userMutations } from './user/mutations'

// export default {
// 	...userMutations,
// 	...earningsMutations,
// }
import { userMutations, userMutationsResolvers } from './user/mutations'
import userTypes from './user/types'
import earningTypes from './earnings/types'
import {
	earningMutationsResolvers,
	earningsMutations,
} from './earnings/mutations'

export const mutationTypes = [...userTypes, ...earningTypes]
export const mutations = [userMutations, earningsMutations]
export const mutationResolvers = {
	Mutation: {
		...userMutationsResolvers,
		...earningMutationsResolvers,
	},
}
