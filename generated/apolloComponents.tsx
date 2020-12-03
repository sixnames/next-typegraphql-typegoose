import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type Query = {
   __typename?: 'Query';
  me?: Maybe<User>;
  getUser?: Maybe<User>;
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  itemId: Scalars['String'];
  name: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phone: Scalars['String'];
  role: Scalars['String'];
  fullName: Scalars['String'];
  shortName: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  updatedAt: Scalars['Timestamp'];
};


export type InitialSiteQueryQueryVariables = {};


export type InitialSiteQueryQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'secondName' | 'lastName' | 'fullName' | 'shortName' | 'phone' | 'role'>
  )> }
);


export const InitialSiteQueryDocument = gql`
    query InitialSiteQuery {
  me {
    id
    email
    name
    secondName
    lastName
    fullName
    shortName
    phone
    role
  }
}
    `;

/**
 * __useInitialSiteQueryQuery__
 *
 * To run a query within a React component, call `useInitialSiteQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useInitialSiteQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInitialSiteQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useInitialSiteQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InitialSiteQueryQuery, InitialSiteQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<InitialSiteQueryQuery, InitialSiteQueryQueryVariables>(InitialSiteQueryDocument, baseOptions);
      }
export function useInitialSiteQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InitialSiteQueryQuery, InitialSiteQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InitialSiteQueryQuery, InitialSiteQueryQueryVariables>(InitialSiteQueryDocument, baseOptions);
        }
export type InitialSiteQueryQueryHookResult = ReturnType<typeof useInitialSiteQueryQuery>;
export type InitialSiteQueryLazyQueryHookResult = ReturnType<typeof useInitialSiteQueryLazyQuery>;
export type InitialSiteQueryQueryResult = ApolloReactCommon.QueryResult<InitialSiteQueryQuery, InitialSiteQueryQueryVariables>;