import * as types from '../actions/types'
const auth = (state = {}, action: any) => {
  switch (action.type) {
    case types.GET_USER:
      return { ...action.payload }
    case types.LOGIN_USER:
      return { ...action.payload }
    case types.AUTH_ERROR:
      return { ...action.payload }
    default:
      return state
  }
}
export default auth
