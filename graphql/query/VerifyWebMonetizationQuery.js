import gql from 'graphql-tag';

const VerifyWebMonetizationQuery = gql`
    query verifyWebMonetization($requestId: String) {
        verifyWebMonetization(requestId: $requestId) {
            verified
            token
        }
    }
`;

export default VerifyWebMonetizationQuery;
