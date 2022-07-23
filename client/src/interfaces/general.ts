import {
  CreateEarningGroupMutationVariables,
  CreateEarningMutationVariables,
  CreateUserMutationVariables,
  Earnings,
  EarningsGroup,
  LoginMutationVariables,
  User,
} from '../generated/graphql'

export interface Reducers {
  auth: User
  earnings: Earnings[]
  earningGroups: EarningsGroup[]
}
export interface Actions {
  getUser: () => Promise<void>
  loginUser: (values: LoginMutationVariables) => Promise<void>
  createNewUser: (values: CreateUserMutationVariables) => Promise<void>
  logoutUser: () => Promise<void>
  getAllEarningGroups: () => Promise<void>
  createNewGroup: (
    earningGroups: CreateEarningGroupMutationVariables
  ) => Promise<void>
  getAllEarnings: (earningGroupId: number) => Promise<void>
  createEarnings: (values: CreateEarningMutationVariables) => Promise<void>
}
export interface IFormSubmit<T> {
  submit: (values: T) => void
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
