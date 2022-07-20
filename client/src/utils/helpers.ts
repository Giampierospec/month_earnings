import { GraphQLError } from '../interfaces/general'

export const errorsConvert = (error: Error & GraphQLError) => {
  return error?.graphQLErrors
    ? error?.graphQLErrors[0]?.message
    : error.message ?? ''
}
