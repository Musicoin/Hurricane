import gql from 'graphql-tag';

const GetReleaseByIdQuery = gql`
    query getReleaseById($id: String) {
        getReleaseById(id: $id) {
            id
            tx
            title
            artistName
            directTipCount
            directPlayCount
            trackDescription
            genres
            trackImg
            trackUrl
        }
    }
`;

export default GetReleaseByIdQuery;