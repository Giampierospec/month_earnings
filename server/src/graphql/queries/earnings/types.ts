import { gql } from 'apollo-server-express'
import EarningConcepts from '../../../models/EarningConcepts'
import EarningGroup from '../../../models/EarningGroup'
import Earnings from '../../../models/Earnings'

const currencyEnum = gql`
	enum CurrencyEnum {
		USD
		DOP
		EUR
	}
`
const monthEnum = gql`
	enum MonthEnum {
		January
		February
		March
		April
		May
		June
		July
		August
		September
		October
		November
		December
	}
`

const earningConceptsType = gql`
	type EarningConcepts {
		concept: String
		amount: Float
	}
`
const earningsGroupTypeReduced = gql`
	type EarningsGroupReduced {
		id: Int
		name: String
	}
`
const earningsType = gql`
	# Earnings Type
	type Earnings {
		id: Int
		currency: CurrencyEnum
		month_earnings: Float
		spent_in_month: Float
		month: MonthEnum
		year: Int
		concepts: [EarningConcepts]
		earning_group_id: Int
		earningGroup: EarningsGroupReduced
		user: User
	}
`
const earningsGroupType = gql`
	type EarningsGroup {
		id: Int
		name: String
		earnings: [Earnings]
	}
`
export const earningTypesResolvers = {
	Earnings: {
		concepts: async (parent: any) => {
			return await EarningConcepts.findAll({
				where: { earnings_id: parent.id },
			})
		},
		earningGroup: async (parent: any) => {
			return await EarningGroup.findOne({
				where: { id: parent.earning_group_id },
			})
		},
	},
	CurrencyEnum: {
		DOP: 'DOP',
		USD: 'USD',
		EUR: 'EUR',
	},
	MonthEnum: {
		January: 'January',
		February: 'February',
		March: 'March',
		April: 'April',
		May: 'May',
		June: 'June',
		July: 'July',
		August: 'August',
		September: 'September',
		October: 'October',
		November: 'November',
		December: 'December',
	},
	EarningsGroup: {
		earnings: async (parent: any) => {
			return await Earnings.findAll({
				where: {
					earning_group_id: parent.id,
				},
			})
		},
	},
}
export const earningTypeDefinitions = [
	currencyEnum,
	monthEnum,
	earningsType,
	earningsGroupTypeReduced,
	earningConceptsType,
	earningsGroupType,
]
