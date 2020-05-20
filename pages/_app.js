import React from 'react';
import App from 'next/app';
import {ApolloProvider} from '@apollo/react-common';
import client from '../apollo/client';

const Noop = ({children}) => children;

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    const Layout = Component.Layout || Noop;
    return (
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
    );
  }
}
