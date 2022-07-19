import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ConcepstInputType = {
  amount?: InputMaybe<Scalars['Int']>;
  concept?: InputMaybe<Scalars['String']>;
};

export type CreateEarningInput = {
  concepts: Array<InputMaybe<ConcepstInputType>>;
  currency?: InputMaybe<CurrencyEnum>;
  month?: InputMaybe<Scalars['String']>;
  month_earnings?: InputMaybe<Scalars['Float']>;
  year?: InputMaybe<Scalars['Int']>;
};

export enum CurrencyEnum {
  Dop = 'DOP',
  Eur = 'EUR',
  Usd = 'USD'
}

export type EarningConcepts = {
  __typename?: 'EarningConcepts';
  amount?: Maybe<Scalars['Float']>;
  concept?: Maybe<Scalars['String']>;
  earnings_id?: Maybe<Scalars['Int']>;
};

export type Earnings = {
  __typename?: 'Earnings';
  concepts?: Maybe<Array<Maybe<EarningConcepts>>>;
  currency?: Maybe<CurrencyEnum>;
  id?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['String']>;
  month_earnings?: Maybe<Scalars['Float']>;
  spent_in_month?: Maybe<Scalars['Float']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create new earning */
  createEarning?: Maybe<Earnings>;
  /** Logins the user */
  login?: Maybe<User>;
};


export type MutationCreateEarningArgs = {
  input: CreateEarningInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  /** Gets all the earnings */
  getEarnings?: Maybe<Array<Maybe<Earnings>>>;
  /** User query */
  me?: Maybe<User>;
};

/** User Type Object */
export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id?: number | null, firstName?: string | null, lastName?: string | null, email?: string | null, role?: string | null } | null };


export const MeDocument = gql`
    query Me {
  me {
    id
    firstName
    lastName
    email
    role
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;