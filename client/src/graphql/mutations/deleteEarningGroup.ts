import {
  DeleteEarningGroupDocument,
  DeleteEarningGroupMutationVariables,
} from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const deleteEarningGroup = async (
  variables: DeleteEarningGroupMutationVariables
): Promise<boolean> => {
  const { data } = await client.mutate({
    mutation: DeleteEarningGroupDocument,
    variables,
  })
  return data.deleteEarning
}
