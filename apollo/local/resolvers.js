import gql from "graphql-tag";

export const typeDefs = gql`
    type CurrentTrack{
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
        trackUrl: String
    }
    
    extend type Query {
        currentTrack: CurrentTrack
    }
`;

export const resolvers = {};