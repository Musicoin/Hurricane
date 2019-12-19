import gql from 'graphql-tag';

const TopPlaysQuery = gql`
    query topPlays($limit:Int) {
        topPlays(limit: $limit) {
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

export default TopPlaysQuery;