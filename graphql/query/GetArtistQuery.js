import gql from 'graphql-tag';

const GetArtistQuery = gql`
    query getArtist($id:String) {
        getArtist(id: $id) {
            artistAddress
            description
            name
            imageUrl
            verified
            followers
            tipCount
            totalArtistPlays
            social
            draftProfile
            artistTracks {
                id
                artistId
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
    }
`;

export default GetArtistQuery;
