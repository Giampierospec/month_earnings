import {
  CreateEarningGroupMutationVariables,
  LoginMutationVariables,
} from '../generated/graphql'
import { createEarningGroup } from '../graphql/mutations/createEarningGroup'
import { login } from '../graphql/mutations/login'
import { getEarningsGroup } from '../graphql/queries/getEarningsGroups'
import { me } from '../graphql/queries/me'
import * as types from './types'
export const getUser = () => async (dispatch) => {
  try {
    const user = await me()
    dispatch({ type: types.GET_USER, payload: user })
  } catch (error) {
    dispatch({ type: types.AUTH_ERROR, payload: error })
  }
}

export const loginUser =
  (variables: LoginMutationVariables) => async (dispatch) => {
    try {
      const user = await login(variables)
      dispatch({ type: types.LOGIN_USER, payload: user })
    } catch (error) {
      dispatch({ type: types.AUTH_ERROR, payload: error })
    }
  }

/** Earning Group */
export const getEarningGroupsByUser = () => async (dispatch) => {
  try {
    const earningGroups = await getEarningsGroup()
    dispatch({
      type: types.GET_EARNING_GROUP,
      payload: earningGroups,
    })
  } catch (error) {
    dispatch({
      type: types.EARNING_GROUP_ERROR,
      payload: error,
    })
  }
}
export const addNewGroup =
  (variables: CreateEarningGroupMutationVariables) => async (dispatch) => {
    try {
      const earningGroups = await createEarningGroup(variables)
      dispatch({
        type: types.CREATE_EARNING_GROUP,
        payload: earningGroups,
      })
    } catch (error) {
      dispatch({
        type: types.EARNING_GROUP_ERROR,
        payload: error,
      })
    }
  }
