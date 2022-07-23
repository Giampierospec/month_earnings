import * as types from '../actions/types'
const earningGroups = (state = [], action) => {
  switch (action.type) {
    case types.GET_EARNING_GROUPS:
      return action.payload ? [...action.payload] : []

    case types.CREATE_EARNING_GROUP:
      return [action.payload, ...state]
    default:
      return state
  }
}
export default earningGroups
