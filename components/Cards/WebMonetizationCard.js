import React, {useEffect} from 'react';
import {useMonetizationCounter, initGlobalWebMonetizationState, IfWebMonetized, IfNotWebMonetized, IfWebMonetizationPending} from 'react-web-monetization';
import {useLazyQuery} from '@apollo/react-hooks';
import VerifyWebMonetizationQuery from '../../graphql/query/VerifyWebMonetizationQuery';
import Card from '../Common/Card';

function WebMonetizationCard() {
  const counter = useMonetizationCounter();
  const [verifyWebMonetization, {loading, error, data}] = useLazyQuery(VerifyWebMonetizationQuery);

  useEffect(() => {
    initGlobalWebMonetizationState();

    function startMonetization(event) {
      const {requestId} = event.detail;
      console.log(requestId);
      if (requestId) {
        verifyWebMonetization({variables: {requestId}});
      }
    }

    if (document.monetization) {
      document.monetization.addEventListener('monetizationstart', startMonetization);
    }

    return function cleanup() {
      if (document.monetization) {
        document.monetization.removeEventListener('monetizationstart', startMonetization);
      }
    };
  }, []);

  return (
      <Card>
        <p style={{padding: 20, textAlign: 'center'}}>
          <IfNotWebMonetized>
            <span>web monetization stopped</span>
          </IfNotWebMonetized>
          <IfWebMonetizationPending>
            <span>web monetization  loading...</span>
          </IfWebMonetizationPending>
          <IfWebMonetized>
            {loading && <span>Verifying payment...</span>}
            {error && <span>{error.toString()}</span>}
            {data && data.verifyWebMonetization.verified &&
            <span>Thanks for supporting our site! You have accumulated {(counter.totalAmount / (10 ** counter.assetScale)).toFixed(counter.assetScale) + ' ' + counter.assetCode}</span>}
            {data && !data.verifyWebMonetization.verified && <span>Your web monetization payment is not verified</span>}
          </IfWebMonetized>
        </p>
      </Card>
  );
}

export default WebMonetizationCard;
