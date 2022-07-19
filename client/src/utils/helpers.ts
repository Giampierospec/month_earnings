import { GraphQLError } from '../interfaces/general'

export const errorsConvert = (error: Error & GraphQLError) => {
  console.log('error', JSON.stringify(error))
  return error?.graphQLErrors[0]?.message ?? error.message ?? ''
}
