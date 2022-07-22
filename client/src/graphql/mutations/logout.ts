import { LogoutDocument, User } from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const logout = async (): Promise<User> => {
  const { data } = await client.mutate({
    mutation: LogoutDocument,
  })
  return data.logout
}
