import { gql } from 'apollo-server-express'
import EarningGroup from '../../models/EarningGroup'
import Earnings from '../../models/Earnings'
import User from '../../models/User'
const pageable = gql`
	union Pageable = User | Earnings | EarningsGroup
`

const paginatorList = gql`
	"General paginator inteface"
	interface Paginator {
		hasMore: Boolean
		currentPage: Int
		total: Int
		items: [Pageable]
	}
	type EarningsPaginator implements Paginator {
		hasMore: Boolean
		currentPage: Int
		total: Int
		items: [Earnings]
	}
	type EarningsGroupPaginator implements Paginator {
		hasMore: Boolean
		currentPage: Int
		total: Int
		items: [EarningsGroup]
	}
`
export const generalResolvers = {
	Pageable: {
		__resolveType: (obj: any, context: any, inf: any) => {
			if (obj instanceof Earnings) {
				return 'Earnings'
			}
			if (obj instanceof User) {
				return 'User'
			}
			if (obj instanceof EarningGroup) {
				return 'EarningsGroup'
			}
			return null
		},
	},
}

export const generalTypes = [paginatorList, pageable]
