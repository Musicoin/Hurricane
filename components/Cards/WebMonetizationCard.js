import {useMonetizationState, useMonetizationCounter, initGlobalWebMonetizationState} from 'react-web-monetization';

initGlobalWebMonetizationState();

export default function WebMonetizationCard() {
  const monetization = useMonetizationState();
  const counter = useMonetizationCounter();

  return (
      <div className="card">
        <div className="card__content">
          <p style={{padding: 20, textAlign: 'center'}}>
            {monetization.state === 'stopped' && 'web monetization stopped'}
            {monetization.state === 'pending' && 'web monetization  loading...'}
            {monetization.state === 'started' && 'Thanks for supporting our site! You have accumulated ' + (counter.totalAmount / (10 ** counter.assetScale)).toFixed(counter.assetScale) + ' ' + counter.assetCode}
            {!monetization.state && 'Sign up for Coil to support our site!'}
          </p>
        </div>
      </div>

  );
}
