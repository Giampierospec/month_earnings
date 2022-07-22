import * as types from '../actions/types'
import { User } from '../generated/graphql'

const auth = (state = {} as User, action: any) => {
  switch (action.type) {
    case types.GET_USER:
      return action.payload ? { ...action.payload } : null
    case types.LOGIN_USER:
      return { ...action.payload }
    case types.CREATE_USER:
      return { ...action.payload }
    default:
      return state
  }
}
export default auth
