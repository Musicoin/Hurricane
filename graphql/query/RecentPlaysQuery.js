import gql from 'graphql-tag';

const RecentPlaysQuery = gql`
    query recentPlays($limit:Int) {
        recentPlays(limit: $limit) {
            tx
            title
            artistName
            directTipCount
            directPlayCount
            description
            genres
            trackImg
        }
    }
`;

export default RecentPlaysQuery;