import gql from 'graphql-tag';

export const typeDefs = gql`
    type Stats {
        plays: String!
        tips: String!
    }

    type Release {
        id: String
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

    type Artist {
        artistAddress: String
        description: String
        name: String
        imageUrl: String
        verified: String
        followers: String
        tipCount: String
    }

    type ArtistOfTheWeekResult {
        release: Release
        artist: Artist
    }

    type Query {
        stats: Stats
        recentPlays(limit: Int):[Release]
        topPlays(limit: Int): [Release]
        trendingList(limit: Int): [Release]
        getArtistOfTheWeek: ArtistOfTheWeekResult
        getNewArtists(limit: Int): [Artist]
        getDebuts(limit: Int): [Release]
    }
    type Mutation{
        increasePlays(releaseId: String): Stats
    }

    type Subscription{
        playsIncreased: Stats
        recentPlaysUpdated: Release
        topPlaysUpdated: Release
        trendingListUpdated: [Release]
    }
`;
