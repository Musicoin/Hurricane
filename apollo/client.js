import React from 'react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import {WebSocketLink} from 'apollo-link-ws';
import {split} from 'apollo-link';
import {getMainDefinition} from 'apollo-utilities';
import {resolvers} from './local/resolvers';

// Create an http link:
const httpLink = new HttpLink({
  // uri: 'http://192.168.2.103:8082/graphql',
  uri: 'https://t7.musicoin.org/graphql',
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  fetch,
});

let isClient = process.browser;
let link = null;

if (isClient) {

// Create a WebSocket link:
  const wsLink = new WebSocketLink({
    // uri: 'ws://192.168.2.103:8082/subscriptions',
    uri: `wss://t7.musicoin.org/graphql`,
    options: {
      reconnect: true,
    },
  });

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
  link = split(
      // split based on operation type
      ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink,
  );
}
let ssrMode = typeof window === 'undefined';
let cache = new InMemoryCache().restore({});
cache.writeData({
  data: {
    currentTrack: null,
  },
});

let client = new ApolloClient({
  ssrMode, // Disables forceFetch on the server (so queries are only run once)
  link: isClient ? link : httpLink,
  cache,
  resolvers,
});

export default client;
