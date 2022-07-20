import * as types from '../actions/types'
import { User } from '../generated/graphql'
import { ActionError } from '../interfaces/general'
interface AuthReducerFields extends ActionError {
  user: User
}
const auth = (state = {} as AuthReducerFields, action: any) => {
  switch (action.type) {
    case types.GET_USER:
      return { ...state, user: action.payload }
    case types.LOGIN_USER:
      return { ...state, user: action.payload }
    case types.AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
export default auth
