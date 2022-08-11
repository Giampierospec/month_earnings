import {
  DeleteEarningDocument,
  DeleteEarningMutationVariables,
} from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const deleteEarning = async (
  variables: DeleteEarningMutationVariables
): Promise<boolean> => {
  const { data } = await client.mutate({
    mutation: DeleteEarningDocument,
    variables,
  })
  return data.deleteEarning
}
