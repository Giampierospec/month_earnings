import {
  CreateUserMutationVariables,
  Earnings,
  EarningsGroupType,
  LoginMutationVariables,
  User,
} from '../generated/graphql'

export interface Reducers {
  auth: User
  earnings: Earnings[]
  earningGroups: EarningsGroupType[]
}
export interface Actions {
  getUser: () => Promise<void>
  loginUser: (values: LoginMutationVariables) => Promise<void>
  createNewUser: (values: CreateUserMutationVariables) => Promise<void>
  getAllEarningGroups: (earningGroups: EarningsGroupType[]) => void
  createNewGroup: (earningGroups: EarningsGroupType) => void
  getAllEarnings: (earnings: Earnings[]) => void
  createEarnings: (earnings: Earnings) => void
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
