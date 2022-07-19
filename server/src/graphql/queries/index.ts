import * as graphql from 'graphql'
import earningqueries from './earnings/queries'
import { userQueries } from './users/queries'
export const queries = {
	...earningqueries,
	...userQueries,
}
