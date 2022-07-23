import { gql } from 'apollo-server-core'
import * as graphql from 'graphql'

const createUserInput = gql`
	"Input for creating an user"
	input CreateUserInput {
		email: String
		firstName: String
		lastName: String
		password: String
	}
`
const loginInput = gql`
	"Input for login mutation"
	input LoginInput {
		email: String
		password: String
	}
`
export default [createUserInput, loginInput]
