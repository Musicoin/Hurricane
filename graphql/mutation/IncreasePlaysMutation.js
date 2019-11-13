import gql from 'graphql-tag';

const IncreasePlaysMutation = gql`
    mutation IncreasePlaysMutation {
        increasePlays {
            plays
            tips
        }
    }
`;

export default IncreasePlaysMutation;