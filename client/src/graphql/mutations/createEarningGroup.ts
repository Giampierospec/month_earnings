import {
  CreateEarningGroupDocument,
  CreateEarningGroupMutationVariables,
  EarningsGroup,
} from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const createEarningGroup = async (
  variables: CreateEarningGroupMutationVariables
): Promise<EarningsGroup> => {
  const { data } = await client.mutate({
    mutation: CreateEarningGroupDocument,
    variables,
  })
  return data.createEarningGroup
}
