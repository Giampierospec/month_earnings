import {
  CreateEarningDocument,
  CreateEarningMutationVariables,
  Earnings,
} from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const createEarning = async (
  variables: CreateEarningMutationVariables
): Promise<Earnings> => {
  const { data } = await client.mutate({
    mutation: CreateEarningDocument,
    variables,
  })
  return data.createEarning
}
