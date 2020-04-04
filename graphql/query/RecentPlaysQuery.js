import gql from 'graphql-tag';

const RecentPlaysQuery = gql`
    query recentPlays($limit:Int) {
        recentPlays(limit: $limit) {
            id
            tx
            title
            artistName
            directTipCount
            directPlayCount
            trackDescription
            genres
            trackImg
        }
    }
`;

export default RecentPlaysQuery;