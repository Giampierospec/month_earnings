import {
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
  getAllEarningGroups: (earningGroups: EarningsGroupType[]) => void
  createNewGroup: (earningGroups: EarningsGroupType) => void
  getAllEarnings: (earnings: Earnings[]) => void
  createEarnings: (earnings: Earnings) => void
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
