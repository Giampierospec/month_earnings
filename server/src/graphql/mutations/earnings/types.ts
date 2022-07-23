import { gql } from 'apollo-server-express'

const conceptsInput = gql`
	input ConceptsInputType {
		concept: String
		amount: Float
	}
`
const createEarningGroupInput = gql`
	input CreateEarningGroupInput {
		name: String
	}
`
const createEarningInput = gql`
	input CreateEarningInput {
		currency: CurrencyEnum
		month_earnings: Float
		month: MonthEnum
		year: Int
		earning_group_id: Int!
		concepts: [ConceptsInputType]
	}
`

export default [conceptsInput, createEarningGroupInput, createEarningInput]
