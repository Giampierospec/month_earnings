import {
  CreateEarningGroupMutationVariables,
  EarningsGroupType,
  LoginMutationVariables,
  User,
} from '../generated/graphql'

interface AuthFields extends ActionError {
  user: User
}
interface EarningGroupFields extends ActionError {
  earningGroups: EarningsGroupType[]
}
export interface Reducers {
  auth: AuthFields
  group: EarningGroupFields
}
export interface Actions {
  getUser: () => Promise<void>
  loginUser: (values: LoginMutationVariables) => Promise<void>
  getEarningGroupsByUser: () => Promise<void>
  addNewGroup: (values: CreateEarningGroupMutationVariables) => Promise<void>
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
