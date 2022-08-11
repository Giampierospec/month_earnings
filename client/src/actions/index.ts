import {
  CreateEarningGroupMutationVariables,
  CreateEarningMutationVariables,
  CreateUserMutationVariables,
  DeleteEarningGroupMutationVariables,
  DeleteEarningMutationVariables,
  Earnings,
  EarningsPaginator,
  LoginMutationVariables,
} from '../generated/graphql'
import { createEarning } from '../graphql/mutations/createEarning'
import { createEarningGroup } from '../graphql/mutations/createEarningGroup'
import { createUser } from '../graphql/mutations/createUser'
import { deleteEarning } from '../graphql/mutations/deleteEarning'
import { deleteEarningGroup } from '../graphql/mutations/deleteEarningGroup'
import { login } from '../graphql/mutations/login'
import { logout } from '../graphql/mutations/logout'
import { getEarnings } from '../graphql/queries/getEarnings'
import { getEarningsGroup } from '../graphql/queries/getEarningsGroups'
import { me } from '../graphql/queries/me'
import { PaginationArgs } from '../interfaces/general'
import { loadAll } from '../utils/helpers'
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

export const createNewUser =
  (variables: CreateUserMutationVariables) => async (dispatch) => {
    const user = await createUser(variables)
    dispatch({ type: types.CREATE_USER, payload: user })
  }
export const logoutUser = () => async (dispatch) => {
  const user = await logout()
  dispatch({ type: types.LOGOUT_USER, payload: user })
}

export const getAllEarningGroups =
  (args: PaginationArgs) => async (dispatch) => {
    const earningGroups = await getEarningsGroup({
      ...args,
    })
    dispatch({ type: types.GET_EARNING_GROUPS, payload: earningGroups })
  }
export const deleteEarningGroupsAction =
  (variables: DeleteEarningGroupMutationVariables) => async (dispatch) => {
    await deleteEarningGroup(variables)
    dispatch({
      type: types.DELETE_EARNING_GROUP,
      payload: variables.deleteEarningGroupId,
    })
  }
export const getMoreEarningGroups =
  (args: PaginationArgs) => async (dispatch) => {
    const earningGroups = await getEarningsGroup({
      ...args,
    })
    dispatch({ type: types.GET_MORE_EARNING_GROUPS, payload: earningGroups })
  }

export const createNewGroup =
  (variables: CreateEarningGroupMutationVariables) => async (dispatch) => {
    const earningGroups = await createEarningGroup(variables)
    dispatch({
      type: types.CREATE_EARNING_GROUP,
      payload: earningGroups,
    })
  }

export const getAllEarnings =
  (args: PaginationArgs & { earningGroupId: number }) => async (dispatch) => {
    let earnings: EarningsPaginator
    if (args.loadAll) {
      const items = await loadAll<Earnings>(getEarnings, {
        earningGroupId: args.earningGroupId,
      })
      earnings = {
        hasMore: false,
        total: items?.length,
        items,
      }
    } else {
      earnings = await getEarnings({ ...args })
    }
    dispatch({
      type: types.GET_EARNINGS,
      payload: earnings,
    })
  }
export const createEarnings =
  (variables: CreateEarningMutationVariables) => async (dispatch) => {
    const earnings = await createEarning(variables)
    dispatch({
      type: types.CREATE_EARNINGS,
      payload: earnings,
    })
  }
export const deleteEarningAction =
  (variables: DeleteEarningMutationVariables) => async (dispatch) => {
    await deleteEarning(variables)
    dispatch({
      type: types.DELETE_EARNINGS,
      payload: variables.deleteEarningId,
    })
  }
