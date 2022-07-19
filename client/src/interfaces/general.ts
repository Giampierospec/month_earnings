import { LoginMutationVariables, User } from '../generated/graphql'

interface AuthFields extends ActionError {
  user: User
}
export interface Reducers {
  auth: AuthFields
}
export interface Actions {
  getUser: () => Promise<void>
  loginUser: (values: LoginMutationVariables) => Promise<void>
}
interface ErrorMessage {
  message
}
export interface GraphQLError {
  graphQLErrors: ErrorMessage[]
}
export interface ActionError {
  error: Error & GraphQLError
}
