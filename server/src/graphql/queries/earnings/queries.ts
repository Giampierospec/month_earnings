import * as graphql from 'graphql'
import Earnings from '../../../models/Earnings'
import { EarningsType } from './types'
export default {
	getEarnings: {
		name: 'getEarnings',
		type: new graphql.GraphQLList(EarningsType),
		resolve: async (_: any, req: any) => {
			console.log('req', _, req)
			return await Earnings.findAll()
		},
	},
}
