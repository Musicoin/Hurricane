import gql from 'graphql-tag';

export const typeDefs = gql`
    type Stats {
        plays: String!
        tips: String!
    }

    type Release {
        tx: String
        title: String
        link: String
        pppLink: String
        genres: [String]
        artistName: String
        artistLink: String
        trackImg: String
        description: String
        directTipCount: Int
        directPlayCount: Int
    }

    type Query {
        stats: Stats
        recentPlays(limit: Int):[Release]
    }
    type Mutation{
        increasePlays: Stats
    }
    
    type Subscription{
        playsIncreased: Stats
    }
`;
