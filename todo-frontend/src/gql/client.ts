import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';

export const getApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    uri: 'https://f59v5z6wni.execute-api.us-west-2.amazonaws.com/graphql',
    cache: new InMemoryCache()
  });
};
