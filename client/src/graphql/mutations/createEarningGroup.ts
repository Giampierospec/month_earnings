import {
  CreateEarningGroupDocument,
  CreateEarningGroupMutationVariables,
  EarningsGroupType,
} from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const createEarningGroup = async (
  variables: CreateEarningGroupMutationVariables
): Promise<EarningsGroupType> => {
  const { data } = await client.mutate({
    mutation: CreateEarningGroupDocument,
    variables,
  })
  return data.createEarningGroup
}
