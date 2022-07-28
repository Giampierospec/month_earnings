import { KeyboardEvent } from 'react'
import { Paginator } from '../generated/graphql'
import { GraphQLError } from '../interfaces/general'

export const errorsConvert = (error: Error & GraphQLError) => {
  return error?.graphQLErrors
    ? error?.graphQLErrors[0]?.message
    : error.message ?? ''
}

export const limitKeyPress = (
  e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  limit = 4
) => {
  if (e.currentTarget.value.length === limit) {
    e.preventDefault()
  }
}

export const loadAll = async <T>(
  loader: (opts: any) => Promise<Paginator>,
  options?: any,
  first = 100,
  pageNumber = 1
): Promise<T[]> => {
  const result = await loader({
    first,
    page: pageNumber,
    ...options,
  })
  const items = result.items
  while (result.hasMore) {
    const res = await loader({
      first,
      page: pageNumber,
      ...options,
    })
    items.concat(res.items)
  }
  return items as T[]
}
export const documentTitleMap = {
  '/': 'Earnings',
  '/details': 'Earning Group Details',
}
