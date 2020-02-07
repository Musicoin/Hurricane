import gql from 'graphql-tag';

const TrendingReleasesQuery = gql`
    query trendingList($limit:Int) {
        trendingList(limit: $limit) {
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

export default TrendingReleasesQuery;