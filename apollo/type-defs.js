import gql from 'graphql-tag';

export const typeDefs = gql`
    type Stats {
        plays: String!
        tips: String!
    }

    type Query {
        stats: Stats
    }
    type Mutation{
        increasePlays: Stats
    }
    
    type Subscription{
        playsIncreased: Stats
    }
`;
