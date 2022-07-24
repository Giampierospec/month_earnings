import * as types from '../actions/types'
import { EarningsPaginator } from '../generated/graphql'

const earnings = (state = {} as EarningsPaginator, action: any) => {
  switch (action.type) {
    case types.GET_EARNINGS:
      return action.payload ? action.payload : {}
    case types.CREATE_EARNINGS:
      return { ...state, items: [action.payload, ...state.items] }
    default:
      return state
  }
}
export default earnings
