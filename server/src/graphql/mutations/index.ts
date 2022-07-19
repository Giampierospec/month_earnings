import { earningsMutations } from './earnings/mutations'
import { userMutations } from './user/mutations'

export default {
	...userMutations,
	...earningsMutations,
}
