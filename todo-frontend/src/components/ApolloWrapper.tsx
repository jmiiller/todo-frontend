import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '../gql/client';
import React, { useMemo } from 'react';

export const ApolloWrapper: React.FunctionComponent = ({
  children
}): React.ReactElement => {
  const client = useMemo(() => getApolloClient(), []);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
