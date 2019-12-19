import gql from 'graphql-tag';

const topPlaysUpdatedSubscription = gql`
    subscription topPlaysUpdated{
        topPlaysUpdated {
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

export default topPlaysUpdatedSubscription;