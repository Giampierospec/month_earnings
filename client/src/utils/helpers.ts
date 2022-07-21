import { KeyboardEvent } from 'react'
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
