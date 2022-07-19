import { LoginMutationVariables } from '../generated/graphql'
import { login } from '../graphql/mutations/login'
import { me } from '../graphql/queries/me'
import * as types from './types'
export const getUser = () => async (dispatch) => {
  try {
    const user = await me()
    dispatch({ type: types.GET_USER, payload: { user, error: null } })
  } catch (error) {
    dispatch({ type: types.AUTH_ERROR, payload: { user: null, error } })
  }
}

export const loginUser =
  (variables: LoginMutationVariables) => async (dispatch) => {
    try {
      const user = await login(variables)
      dispatch({ type: types.LOGIN_USER, payload: { user, error: null } })
    } catch (error) {
      dispatch({ type: types.AUTH_ERROR, payload: { user: null, error } })
    }
  }
