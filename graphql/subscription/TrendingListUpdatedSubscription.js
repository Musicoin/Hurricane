import gql from 'graphql-tag';

const trendingListUpdatedSubscription = gql`
    subscription trendingListUpdated{
        trendingListUpdated {
            id
            tx
            title
            artistName
            directTipCount
            directPlayCount
            description
            genres
            trackImg
            trackUrl
        }
    }
`;

export default trendingListUpdatedSubscription;