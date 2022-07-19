import { MeDocument, User } from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const me = async (): Promise<User> => {
  const { data } = (await client.query({
    query: MeDocument,
  })) as any
  return data.me
}
