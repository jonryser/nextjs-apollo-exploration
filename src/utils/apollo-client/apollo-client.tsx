import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

// Only holds publicRuntimeConfig from next.config.js nothing else.
const { publicRuntimeConfig } = getConfig();

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: publicRuntimeConfig.graphql_url
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {})
    })
);
