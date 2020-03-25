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
        name: String
        imageUrl: String
        profileAddress: String
        releaseCount: Int
    }

    type ArtistOfTheWeekResult {
        release: Release
        artist: Artist
    }

    type NewArtist {
        artistAddress: String
        description: String
        name: String
        imageUrl: String
        verified: String
        followers: String
        tipCount: String
    }

    type Query {
        stats: Stats
        recentPlays(limit: Int):[Release]
        topPlays(limit: Int): [Release]
        trendingList(limit: Int): [Release]
        getArtistOfTheWeek: ArtistOfTheWeekResult
        getNewArtists(limit: Int): [NewArtist]
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
