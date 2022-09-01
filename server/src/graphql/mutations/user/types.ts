import { gql } from 'apollo-server-core'

const createUserInput = gql`
	"Input for creating an user"
	input CreateUserInput {
		email: String
		firstName: String
		lastName: String
		password: String
	}
`
const sendResetPasswordEmailInput = gql`
	"Input for reset password email"
	input SendResetPasswordEmailInput {
		email: String
	}
`
const resetPasswordInput = gql`
	"Input for resetPassword"
	input ResetPasswordInput {
		password: String
		token: String
	}
`
const loginInput = gql`
	"Input for login mutation"
	input LoginInput {
		email: String
		password: String
	}
`
export default [
	createUserInput,
	loginInput,
	resetPasswordInput,
	sendResetPasswordEmailInput,
]
