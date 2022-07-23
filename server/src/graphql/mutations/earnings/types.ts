import { gql } from 'apollo-server-express'

const conceptsInput = gql`
	"Type for concepts input"
	input ConceptsInputType {
		concept: String
		amount: Float
	}
`
const createEarningGroupInput = gql`
	"Input to create a new Earning Group"
	input CreateEarningGroupInput {
		name: String
	}
`
const createEarningInput = gql`
	"Input to create a new Earning"
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
