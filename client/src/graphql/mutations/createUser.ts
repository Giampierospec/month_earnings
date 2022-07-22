import {
  CreateUserDocument,
  CreateUserMutationVariables,
  User,
} from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const createUser = async (
  variables: CreateUserMutationVariables
): Promise<User> => {
  const { data } = await client.mutate({
    mutation: CreateUserDocument,
    variables,
  })
  return data.createUser
}
