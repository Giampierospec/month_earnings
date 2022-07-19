import {
  LoginDocument,
  LoginMutationVariables,
  User,
} from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const login = async (
  variables: LoginMutationVariables
): Promise<User> => {
  const { data } = await client.mutate({
    mutation: LoginDocument,
    variables,
  })
  return data.login
}
