import * as types from '../actions/types'
import { EarningsGroupPaginator } from '../generated/graphql'
const earningGroups = (state = {} as EarningsGroupPaginator, action) => {
  switch (action.type) {
    case types.GET_EARNING_GROUPS:
      return action.payload ? action.payload : {}
    case types.GET_MORE_EARNING_GROUPS:
      return {
        ...action.payload,
        items: [...state.items, ...action.payload.items],
      }
    case types.CREATE_EARNING_GROUP:
      return { ...state, items: [action.payload, ...state.items] }
    default:
      return state
  }
}
export default earningGroups
