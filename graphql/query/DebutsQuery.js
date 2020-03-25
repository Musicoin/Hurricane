import gql from 'graphql-tag';

const GetDebuts = gql`
    query getDebuts($limit: Int) {
        getDebuts(limit: $limit) {
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

export default GetDebuts;