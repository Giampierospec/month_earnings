import {
  EarningsGroupPaginator,
  GetEarningGroupsDocument,
  GetEarningGroupsQueryVariables,
} from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const getEarningsGroup = async (
  variables: GetEarningGroupsQueryVariables
): Promise<EarningsGroupPaginator> => {
  const { data } = await client.query({
    query: GetEarningGroupsDocument,
    variables,
  })
  return data.getEarningGroups
}
