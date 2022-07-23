import { gql } from 'apollo-server-core'
import * as graphql from 'graphql'

const createUserInput = gql`
	input CreateUserInput {
		email: String
		firstName: String
		lastName: String
		password: String
	}
`
const loginInput = gql`
	input LoginInput {
		email: String
		password: String
	}
`
export default [createUserInput, loginInput]
