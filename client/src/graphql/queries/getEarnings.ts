import {
  EarningsPaginator,
  GetEarningsDocument,
  GetEarningsQueryVariables,
} from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const getEarnings = async (
  variables: GetEarningsQueryVariables
): Promise<EarningsPaginator> => {
  const { data } = await client.query({
    query: GetEarningsDocument,
    variables,
  })
  return data.getEarnings
}
