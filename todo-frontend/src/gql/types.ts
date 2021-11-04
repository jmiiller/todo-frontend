/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type DeleteTodoItemInput = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteTodoItem: TodoItem;
  putTodoItem: TodoItem;
};


export type MutationDeleteTodoItemArgs = {
  input: DeleteTodoItemInput;
};


export type MutationPutTodoItemArgs = {
  input: PutTodoItemInput;
};

export type PutTodoItemInput = {
  content: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  todoItem?: Maybe<TodoItem>;
  todoItems: Array<TodoItem>;
};


export type QueryTodoItemArgs = {
  input: TodoItemInput;
};

export type TodoItem = {
  __typename?: 'TodoItem';
  content: Scalars['String'];
  id: Scalars['String'];
};

export type TodoItemInput = {
  id: Scalars['String'];
};

export type DeleteTodoItemsMutationVariables = Exact<{
  input: DeleteTodoItemInput;
}>;


export type DeleteTodoItemsMutation = { __typename?: 'Mutation', deleteTodoItem: { __typename?: 'TodoItem', id: string, content: string } };

export type GetTodoItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoItemsQuery = { __typename?: 'Query', todoItems: Array<{ __typename?: 'TodoItem', id: string, content: string }> };

export type PutTodoItemsMutationVariables = Exact<{
  input: PutTodoItemInput;
}>;


export type PutTodoItemsMutation = { __typename?: 'Mutation', putTodoItem: { __typename?: 'TodoItem', id: string, content: string } };


export const DeleteTodoItemsDocument = gql`
    mutation deleteTodoItems($input: DeleteTodoItemInput!) {
  deleteTodoItem(input: $input) {
    id
    content
  }
}
    `;
export type DeleteTodoItemsMutationFn = Apollo.MutationFunction<DeleteTodoItemsMutation, DeleteTodoItemsMutationVariables>;

/**
 * __useDeleteTodoItemsMutation__
 *
 * To run a mutation, you first call `useDeleteTodoItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoItemsMutation, { data, loading, error }] = useDeleteTodoItemsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTodoItemsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoItemsMutation, DeleteTodoItemsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoItemsMutation, DeleteTodoItemsMutationVariables>(DeleteTodoItemsDocument, options);
      }
export type DeleteTodoItemsMutationHookResult = ReturnType<typeof useDeleteTodoItemsMutation>;
export type DeleteTodoItemsMutationResult = Apollo.MutationResult<DeleteTodoItemsMutation>;
export type DeleteTodoItemsMutationOptions = Apollo.BaseMutationOptions<DeleteTodoItemsMutation, DeleteTodoItemsMutationVariables>;
export const GetTodoItemsDocument = gql`
    query getTodoItems {
  todoItems {
    id
    content
  }
}
    `;

/**
 * __useGetTodoItemsQuery__
 *
 * To run a query within a React component, call `useGetTodoItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodoItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoItemsQuery, GetTodoItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoItemsQuery, GetTodoItemsQueryVariables>(GetTodoItemsDocument, options);
      }
export function useGetTodoItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoItemsQuery, GetTodoItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoItemsQuery, GetTodoItemsQueryVariables>(GetTodoItemsDocument, options);
        }
export type GetTodoItemsQueryHookResult = ReturnType<typeof useGetTodoItemsQuery>;
export type GetTodoItemsLazyQueryHookResult = ReturnType<typeof useGetTodoItemsLazyQuery>;
export type GetTodoItemsQueryResult = Apollo.QueryResult<GetTodoItemsQuery, GetTodoItemsQueryVariables>;
export const PutTodoItemsDocument = gql`
    mutation putTodoItems($input: PutTodoItemInput!) {
  putTodoItem(input: $input) {
    id
    content
  }
}
    `;
export type PutTodoItemsMutationFn = Apollo.MutationFunction<PutTodoItemsMutation, PutTodoItemsMutationVariables>;

/**
 * __usePutTodoItemsMutation__
 *
 * To run a mutation, you first call `usePutTodoItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutTodoItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putTodoItemsMutation, { data, loading, error }] = usePutTodoItemsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePutTodoItemsMutation(baseOptions?: Apollo.MutationHookOptions<PutTodoItemsMutation, PutTodoItemsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PutTodoItemsMutation, PutTodoItemsMutationVariables>(PutTodoItemsDocument, options);
      }
export type PutTodoItemsMutationHookResult = ReturnType<typeof usePutTodoItemsMutation>;
export type PutTodoItemsMutationResult = Apollo.MutationResult<PutTodoItemsMutation>;
export type PutTodoItemsMutationOptions = Apollo.BaseMutationOptions<PutTodoItemsMutation, PutTodoItemsMutationVariables>;