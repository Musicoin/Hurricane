import gql from 'graphql-tag'

export const typeDefs = gql`
  type Stats {
    plays: String!
    tips: String!
  }

  type Query {
    stats: Stats
  }
`
