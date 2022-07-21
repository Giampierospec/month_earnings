import * as types from '../actions/types'

const earnings = (state = [], action: any) => {
  switch (action.type) {
    case types.GET_EARNINGS:
      return action.payload ? [...action.payload] : []
    case types.CREATE_EARNINGS:
      return [action.payload, ...state]
    default:
      return state
  }
}
export default earnings
