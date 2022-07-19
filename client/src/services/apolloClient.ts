import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const link = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
  credentials: 'include',
})
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})
