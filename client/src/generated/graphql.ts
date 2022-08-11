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

/** Type for concepts input */
export type ConceptsInputType = {
  amount?: InputMaybe<Scalars['Float']>;
  concept?: InputMaybe<Scalars['String']>;
};

/** Input to create a new Earning Group */
export type CreateEarningGroupInput = {
  name?: InputMaybe<Scalars['String']>;
};

/** Input to create a new Earning */
export type CreateEarningInput = {
  concepts?: InputMaybe<Array<InputMaybe<ConceptsInputType>>>;
  currency?: InputMaybe<CurrencyEnum>;
  earning_group_id: Scalars['Int'];
  month?: InputMaybe<MonthEnum>;
  month_earnings?: InputMaybe<Scalars['Float']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** Input for creating an user */
export type CreateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** Enum for available currencies */
export enum CurrencyEnum {
  Dop = 'DOP',
  Eur = 'EUR',
  Usd = 'USD'
}

/** Earning Concepts associated to an earning */
export type EarningConcepts = {
  __typename?: 'EarningConcepts';
  amount?: Maybe<Scalars['Float']>;
  concept?: Maybe<Scalars['String']>;
};

/** Earnings Type */
export type Earnings = {
  __typename?: 'Earnings';
  concepts?: Maybe<Array<Maybe<EarningConcepts>>>;
  currency?: Maybe<CurrencyEnum>;
  earningGroup?: Maybe<EarningsGroupReduced>;
  earning_group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  month?: Maybe<MonthEnum>;
  month_earnings?: Maybe<Scalars['Float']>;
  spent_in_month?: Maybe<Scalars['Float']>;
  user?: Maybe<User>;
  year?: Maybe<Scalars['Int']>;
};

/** Earnings Group Type */
export type EarningsGroup = {
  __typename?: 'EarningsGroup';
  earnings?: Maybe<Array<Maybe<Earnings>>>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type EarningsGroupPaginator = Paginator & {
  __typename?: 'EarningsGroupPaginator';
  currentPage?: Maybe<Scalars['Int']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<EarningsGroup>>>;
  total?: Maybe<Scalars['Int']>;
};

/** A reduced version of earningsGroup */
export type EarningsGroupReduced = {
  __typename?: 'EarningsGroupReduced';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type EarningsPaginator = Paginator & {
  __typename?: 'EarningsPaginator';
  currentPage?: Maybe<Scalars['Int']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<Earnings>>>;
  total?: Maybe<Scalars['Int']>;
};

/** Input for login mutation */
export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** Enum for months */
export enum MonthEnum {
  April = 'April',
  August = 'August',
  December = 'December',
  February = 'February',
  January = 'January',
  July = 'July',
  June = 'June',
  March = 'March',
  May = 'May',
  November = 'November',
  October = 'October',
  September = 'September'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new earning associated to an Earning Group */
  createEarning?: Maybe<Earnings>;
  /** Creates an Earning Group */
  createEarningGroup?: Maybe<EarningsGroup>;
  /** Creates a new user */
  createUser?: Maybe<User>;
  /** Deletes the earning */
  deleteEarning: Scalars['Boolean'];
  /** Deletes the earning group */
  deleteEarningGroup: Scalars['Boolean'];
  /** Logins the user */
  login?: Maybe<User>;
  logout?: Maybe<User>;
};


export type MutationCreateEarningArgs = {
  input: CreateEarningInput;
};


export type MutationCreateEarningGroupArgs = {
  input: CreateEarningGroupInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteEarningArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteEarningGroupArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};

export type Pageable = Earnings | EarningsGroup | User;

/** General paginator inteface */
export type Paginator = {
  currentPage?: Maybe<Scalars['Int']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<Pageable>>>;
  total?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /** Gets the earnings group with their earnings */
  getEarningGroups?: Maybe<EarningsGroupPaginator>;
  /** Gets the earnings by earningGroupId */
  getEarnings?: Maybe<EarningsPaginator>;
  /** Gets the current user */
  me?: Maybe<User>;
};


export type QueryGetEarningGroupsArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetEarningsArgs = {
  earningGroupId: Scalars['Int'];
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
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

export type CreateEarningMutationVariables = Exact<{
  input: CreateEarningInput;
}>;


export type CreateEarningMutation = { __typename?: 'Mutation', createEarning?: { __typename?: 'Earnings', id?: number | null, month?: MonthEnum | null, currency?: CurrencyEnum | null, month_earnings?: number | null, spent_in_month?: number | null, earning_group_id?: number | null, earningGroup?: { __typename?: 'EarningsGroupReduced', id?: number | null, name?: string | null } | null, concepts?: Array<{ __typename?: 'EarningConcepts', concept?: string | null, amount?: number | null } | null> | null } | null };

export type CreateEarningGroupMutationVariables = Exact<{
  input: CreateEarningGroupInput;
}>;


export type CreateEarningGroupMutation = { __typename?: 'Mutation', createEarningGroup?: { __typename?: 'EarningsGroup', id?: number | null, name?: string | null, earnings?: Array<{ __typename?: 'Earnings', id?: number | null, month?: MonthEnum | null, year?: number | null, spent_in_month?: number | null } | null> | null } | null };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id?: number | null, firstName?: string | null, lastName?: string | null, email?: string | null, role?: string | null } | null };

export type DeleteEarningMutationVariables = Exact<{
  deleteEarningId: Scalars['Int'];
}>;


export type DeleteEarningMutation = { __typename?: 'Mutation', deleteEarning: boolean };

export type DeleteEarningGroupMutationVariables = Exact<{
  deleteEarningGroupId: Scalars['Int'];
}>;


export type DeleteEarningGroupMutation = { __typename?: 'Mutation', deleteEarningGroup: boolean };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id?: number | null, firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: { __typename?: 'User', id?: number | null, firstName?: string | null, email?: string | null, role?: string | null } | null };

export type GetEarningsQueryVariables = Exact<{
  earningGroupId: Scalars['Int'];
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetEarningsQuery = { __typename?: 'Query', getEarnings?: { __typename?: 'EarningsPaginator', hasMore?: boolean | null, currentPage?: number | null, total?: number | null, items?: Array<{ __typename?: 'Earnings', id?: number | null, currency?: CurrencyEnum | null, month?: MonthEnum | null, year?: number | null, month_earnings?: number | null, spent_in_month?: number | null, earning_group_id?: number | null, earningGroup?: { __typename?: 'EarningsGroupReduced', id?: number | null, name?: string | null } | null, concepts?: Array<{ __typename?: 'EarningConcepts', concept?: string | null, amount?: number | null } | null> | null } | null> | null } | null };

export type GetEarningGroupsQueryVariables = Exact<{
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetEarningGroupsQuery = { __typename?: 'Query', getEarningGroups?: { __typename?: 'EarningsGroupPaginator', hasMore?: boolean | null, currentPage?: number | null, total?: number | null, items?: Array<{ __typename?: 'EarningsGroup', id?: number | null, name?: string | null, earnings?: Array<{ __typename?: 'Earnings', id?: number | null, month?: MonthEnum | null, year?: number | null, spent_in_month?: number | null } | null> | null } | null> | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id?: number | null, firstName?: string | null, lastName?: string | null, email?: string | null, role?: string | null } | null };


export const CreateEarningDocument = gql`
    mutation CreateEarning($input: CreateEarningInput!) {
  createEarning(input: $input) {
    id
    month
    currency
    month_earnings
    spent_in_month
    earning_group_id
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
export type CreateEarningMutationFn = Apollo.MutationFunction<CreateEarningMutation, CreateEarningMutationVariables>;

/**
 * __useCreateEarningMutation__
 *
 * To run a mutation, you first call `useCreateEarningMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEarningMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEarningMutation, { data, loading, error }] = useCreateEarningMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEarningMutation(baseOptions?: Apollo.MutationHookOptions<CreateEarningMutation, CreateEarningMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEarningMutation, CreateEarningMutationVariables>(CreateEarningDocument, options);
      }
export type CreateEarningMutationHookResult = ReturnType<typeof useCreateEarningMutation>;
export type CreateEarningMutationResult = Apollo.MutationResult<CreateEarningMutation>;
export type CreateEarningMutationOptions = Apollo.BaseMutationOptions<CreateEarningMutation, CreateEarningMutationVariables>;
export const CreateEarningGroupDocument = gql`
    mutation CreateEarningGroup($input: CreateEarningGroupInput!) {
  createEarningGroup(input: $input) {
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
export type CreateEarningGroupMutationFn = Apollo.MutationFunction<CreateEarningGroupMutation, CreateEarningGroupMutationVariables>;

/**
 * __useCreateEarningGroupMutation__
 *
 * To run a mutation, you first call `useCreateEarningGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEarningGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEarningGroupMutation, { data, loading, error }] = useCreateEarningGroupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEarningGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateEarningGroupMutation, CreateEarningGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEarningGroupMutation, CreateEarningGroupMutationVariables>(CreateEarningGroupDocument, options);
      }
export type CreateEarningGroupMutationHookResult = ReturnType<typeof useCreateEarningGroupMutation>;
export type CreateEarningGroupMutationResult = Apollo.MutationResult<CreateEarningGroupMutation>;
export type CreateEarningGroupMutationOptions = Apollo.BaseMutationOptions<CreateEarningGroupMutation, CreateEarningGroupMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    firstName
    lastName
    email
    role
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteEarningDocument = gql`
    mutation DeleteEarning($deleteEarningId: Int!) {
  deleteEarning(id: $deleteEarningId)
}
    `;
export type DeleteEarningMutationFn = Apollo.MutationFunction<DeleteEarningMutation, DeleteEarningMutationVariables>;

/**
 * __useDeleteEarningMutation__
 *
 * To run a mutation, you first call `useDeleteEarningMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEarningMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEarningMutation, { data, loading, error }] = useDeleteEarningMutation({
 *   variables: {
 *      deleteEarningId: // value for 'deleteEarningId'
 *   },
 * });
 */
export function useDeleteEarningMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEarningMutation, DeleteEarningMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEarningMutation, DeleteEarningMutationVariables>(DeleteEarningDocument, options);
      }
export type DeleteEarningMutationHookResult = ReturnType<typeof useDeleteEarningMutation>;
export type DeleteEarningMutationResult = Apollo.MutationResult<DeleteEarningMutation>;
export type DeleteEarningMutationOptions = Apollo.BaseMutationOptions<DeleteEarningMutation, DeleteEarningMutationVariables>;
export const DeleteEarningGroupDocument = gql`
    mutation DeleteEarningGroup($deleteEarningGroupId: Int!) {
  deleteEarningGroup(id: $deleteEarningGroupId)
}
    `;
export type DeleteEarningGroupMutationFn = Apollo.MutationFunction<DeleteEarningGroupMutation, DeleteEarningGroupMutationVariables>;

/**
 * __useDeleteEarningGroupMutation__
 *
 * To run a mutation, you first call `useDeleteEarningGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEarningGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEarningGroupMutation, { data, loading, error }] = useDeleteEarningGroupMutation({
 *   variables: {
 *      deleteEarningGroupId: // value for 'deleteEarningGroupId'
 *   },
 * });
 */
export function useDeleteEarningGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEarningGroupMutation, DeleteEarningGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEarningGroupMutation, DeleteEarningGroupMutationVariables>(DeleteEarningGroupDocument, options);
      }
export type DeleteEarningGroupMutationHookResult = ReturnType<typeof useDeleteEarningGroupMutation>;
export type DeleteEarningGroupMutationResult = Apollo.MutationResult<DeleteEarningGroupMutation>;
export type DeleteEarningGroupMutationOptions = Apollo.BaseMutationOptions<DeleteEarningGroupMutation, DeleteEarningGroupMutationVariables>;
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
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    id
    firstName
    email
    role
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const GetEarningsDocument = gql`
    query GetEarnings($earningGroupId: Int!, $first: Int!, $page: Int) {
  getEarnings(earningGroupId: $earningGroupId, first: $first, page: $page) {
    hasMore
    currentPage
    total
    items {
      id
      currency
      month
      year
      month_earnings
      spent_in_month
      earning_group_id
      earningGroup {
        id
        name
      }
      earningGroup {
        name
      }
      concepts {
        concept
        amount
      }
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
 *      first: // value for 'first'
 *      page: // value for 'page'
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
    query GetEarningGroups($first: Int!, $page: Int) {
  getEarningGroups(first: $first, page: $page) {
    hasMore
    currentPage
    total
    items {
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
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetEarningGroupsQuery(baseOptions: Apollo.QueryHookOptions<GetEarningGroupsQuery, GetEarningGroupsQueryVariables>) {
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