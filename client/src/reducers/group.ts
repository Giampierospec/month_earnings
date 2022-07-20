import * as types from '../actions/types'
import { EarningsGroupType } from '../generated/graphql'
import { ActionError } from '../interfaces/general'
interface GroupState extends ActionError {
  earningGroups: EarningsGroupType[]
}

const group = (state = {} as GroupState, action: any) => {
  switch (action.type) {
    case types.CREATE_EARNING_GROUP:
      return {
        ...state,
        earningGroups: [action.payload, ...state.earningGroups],
        error: null,
      }
    case types.GET_EARNING_GROUP:
      return { ...state, earningGroups: action.payload, error: null }
    case types.EARNING_GROUP_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
export default group
