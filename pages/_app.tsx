import React from 'react';
import { useApollo } from '../apollo/client';
import { NextPage } from 'next';
import { ApolloProvider } from '@apollo/client';

interface AppInterface {
  Component: any;
  pageProps: any;
}

const App: NextPage<AppInterface> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

// noinspection JSUnusedGlobalSymbols
export default App;
