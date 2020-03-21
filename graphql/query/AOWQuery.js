import gql from 'graphql-tag';

const AOWQuery = gql`
    query getArtistOfTheWeek {
        getArtistOfTheWeek {
            name
            imageUrl
            profileAddress
        }
    }
`;

export default AOWQuery;