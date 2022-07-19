import {
  Earnings,
  GetEarningsDocument,
  GetEarningsQueryVariables,
} from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const getEarnings = async (
  variables: GetEarningsQueryVariables
): Promise<Earnings[]> => {
  const { data } = await client.query({
    query: GetEarningsDocument,
    variables,
  })
  return data.getEarnings
}
