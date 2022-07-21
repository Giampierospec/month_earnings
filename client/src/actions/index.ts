import { EarningsGroupType, LoginMutationVariables } from '../generated/graphql'
import { login } from '../graphql/mutations/login'
import { me } from '../graphql/queries/me'
import * as types from './types'
export const getUser = () => async (dispatch) => {
  const user = await me()
  dispatch({ type: types.GET_USER, payload: user })
}

export const loginUser =
  (variables: LoginMutationVariables) => async (dispatch) => {
    const user = await login(variables)
    dispatch({ type: types.LOGIN_USER, payload: user })
  }

export const getAllEarningGroups = (earningGroups: EarningsGroupType[]) => ({
  type: types.GET_EARNING_GROUPS,
  payload: earningGroups,
})

export const createNewGroup = (earningGroups: EarningsGroupType) => ({
  type: types.CREATE_EARNING_GROUP,
  payload: earningGroups,
})
