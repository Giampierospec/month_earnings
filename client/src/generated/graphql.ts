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

export type AddToEarningGroupInput = {
  earnings: Array<InputMaybe<EarningsInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type ConcepstInputType = {
  amount?: InputMaybe<Scalars['Int']>;
  concept?: InputMaybe<Scalars['String']>;
};

export type CreateEarningGroupInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type CreateEarningInput = {
  concepts: Array<InputMaybe<ConcepstInputType>>;
  currency?: InputMaybe<CurrencyEnum>;
  earning_group_id?: InputMaybe<Scalars['Int']>;
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
  earningGroup?: Maybe<EarningsGroupTypeReduced>;
  earning_group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['String']>;
  month_earnings?: Maybe<Scalars['Float']>;
  spent_in_month?: Maybe<Scalars['Float']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type EarningsGroupType = {
  __typename?: 'EarningsGroupType';
  earnings?: Maybe<Array<Maybe<Earnings>>>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type EarningsGroupTypeReduced = {
  __typename?: 'EarningsGroupTypeReduced';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type EarningsInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addEarningToGroup?: Maybe<EarningsGroupType>;
  /** Create new earning */
  createEarning?: Maybe<Earnings>;
  /** Add new Earning Group */
  createEarningGroup?: Maybe<EarningsGroupTypeReduced>;
  /** Logins the user */
  login?: Maybe<User>;
  /** Logs out the user */
  logout?: Maybe<User>;
};


export type MutationAddEarningToGroupArgs = {
  input: AddToEarningGroupInput;
};


export type MutationCreateEarningArgs = {
  input: CreateEarningInput;
};


export type MutationCreateEarningGroupArgs = {
  input: CreateEarningGroupInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  /** Gets the earningGroups with the earnings */
  getEarningGroups?: Maybe<Array<Maybe<EarningsGroupType>>>;
  /** Gets all the earnings associated to an earningGroup */
  getEarnings?: Maybe<Array<Maybe<Earnings>>>;
  /** User query */
  me?: Maybe<User>;
};


export type QueryGetEarningsArgs = {
  earningGroupId: Scalars['Int'];
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

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id?: number | null, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type GetEarningsQueryVariables = Exact<{
  earningGroupId: Scalars['Int'];
}>;


export type GetEarningsQuery = { __typename?: 'Query', getEarnings?: Array<{ __typename?: 'Earnings', id?: number | null, currency?: CurrencyEnum | null, month_earnings?: number | null, spent_in_month?: number | null, earningGroup?: { __typename?: 'EarningsGroupTypeReduced', id?: number | null, name?: string | null } | null, concepts?: Array<{ __typename?: 'EarningConcepts', concept?: string | null, amount?: number | null } | null> | null } | null> | null };

export type GetEarningGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEarningGroupsQuery = { __typename?: 'Query', getEarningGroups?: Array<{ __typename?: 'EarningsGroupType', id?: number | null, name?: string | null, earnings?: Array<{ __typename?: 'Earnings', id?: number | null, month?: string | null, year?: number | null, spent_in_month?: number | null } | null> | null } | null> | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id?: number | null, firstName?: string | null, lastName?: string | null, email?: string | null, role?: string | null } | null };


export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    id
    firstName
    lastName
    email
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetEarningsDocument = gql`
    query GetEarnings($earningGroupId: Int!) {
  getEarnings(earningGroupId: $earningGroupId) {
    id
    currency
    month_earnings
    spent_in_month
    earningGroup {
      id
      name
    }
    concepts {
      concept
      amount
    }
  }
}
    `;

/**
 * __useGetEarningsQuery__
 *
 * To run a query within a React component, call `useGetEarningsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEarningsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEarningsQuery({
 *   variables: {
 *      earningGroupId: // value for 'earningGroupId'
 *   },
 * });
 */
export function useGetEarningsQuery(baseOptions: Apollo.QueryHookOptions<GetEarningsQuery, GetEarningsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEarningsQuery, GetEarningsQueryVariables>(GetEarningsDocument, options);
      }
export function useGetEarningsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEarningsQuery, GetEarningsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEarningsQuery, GetEarningsQueryVariables>(GetEarningsDocument, options);
        }
export type GetEarningsQueryHookResult = ReturnType<typeof useGetEarningsQuery>;
export type GetEarningsLazyQueryHookResult = ReturnType<typeof useGetEarningsLazyQuery>;
export type GetEarningsQueryResult = Apollo.QueryResult<GetEarningsQuery, GetEarningsQueryVariables>;
export const GetEarningGroupsDocument = gql`
    query GetEarningGroups {
  getEarningGroups {
    id
    name
    earnings {
      id
      month
      year
      spent_in_month
    }
  }
}
    `;

/**
 * __useGetEarningGroupsQuery__
 *
 * To run a query within a React component, call `useGetEarningGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEarningGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEarningGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEarningGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetEarningGroupsQuery, GetEarningGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEarningGroupsQuery, GetEarningGroupsQueryVariables>(GetEarningGroupsDocument, options);
      }
export function useGetEarningGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEarningGroupsQuery, GetEarningGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEarningGroupsQuery, GetEarningGroupsQueryVariables>(GetEarningGroupsDocument, options);
        }
export type GetEarningGroupsQueryHookResult = ReturnType<typeof useGetEarningGroupsQuery>;
export type GetEarningGroupsLazyQueryHookResult = ReturnType<typeof useGetEarningGroupsLazyQuery>;
export type GetEarningGroupsQueryResult = Apollo.QueryResult<GetEarningGroupsQuery, GetEarningGroupsQueryVariables>;
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