import {
  EarningsGroup,
  GetEarningGroupsDocument,
} from '../../generated/graphql'
import { client } from '../../services/apolloClient'

export const getEarningsGroup = async (): Promise<EarningsGroup[]> => {
  const { data } = await client.query({
    query: GetEarningGroupsDocument,
  })
  return data.getEarningGroups
}
