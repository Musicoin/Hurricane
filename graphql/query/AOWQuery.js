import gql from 'graphql-tag';

const AOWQuery = gql`
    query getArtistOfTheWeek {
        getArtistOfTheWeek {
            artist{
                name
                imageUrl
                profileAddress
            }
            release{
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
    }
`;

export default AOWQuery;