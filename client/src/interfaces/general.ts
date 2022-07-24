import {
  CreateEarningGroupMutationVariables,
  CreateEarningMutationVariables,
  CreateUserMutationVariables,
  EarningsPaginator,
  LoginMutationVariables,
  User,
} from '../generated/graphql'

export interface Reducers {
  auth: User
  earnings: EarningsPaginator
  earningGroups: EarningsPaginator
}
export interface PaginationArgs {
  first: number
  page?: number
  loadAll?: boolean
}

export interface Actions {
  getUser: () => Promise<void>
  loginUser: (values: LoginMutationVariables) => Promise<void>
  createNewUser: (values: CreateUserMutationVariables) => Promise<void>
  logoutUser: () => Promise<void>
  getAllEarningGroups: (args: PaginationArgs) => Promise<void>
  getMoreEarningGroups: (args: PaginationArgs) => Promise<void>
  createNewGroup: (
    earningGroups: CreateEarningGroupMutationVariables
  ) => Promise<void>
  getAllEarnings: (
    args: PaginationArgs & { earningGroupId: number }
  ) => Promise<void>
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
