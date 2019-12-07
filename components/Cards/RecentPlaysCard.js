import Track from '../Track';
import {Query} from 'react-apollo';
import RecentPlaysQuery from '../../graphql/query/RecentPlaysQuery';

export default function RecentlyPlayedCard() {
  return (
      <div className="card">
        <div className="card__title">
          <p>Recently Played</p>
          <div className="card__filter">
            <a href="#" className="card__filter-link active">Day |</a>
            <a href="#" className="card__filter-link">Week |</a>
            <a href="#" className="card__filter-link">Month </a>
          </div>
        </div>
        <div className="card__content">
          <div className="top-tips">
            <div className="track-container">
              <Query query={RecentPlaysQuery} variables={{limit: 5}}>
                {({loading, error, data, subscribeToMore}) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error: {error.message}</p>;
                  return (
                      data.recentPlays.map(release => (
                          <Track image="/img/tracks/tracks-1.png" title={release.title} artist={release.artistName} genre={''} likes={release.directPlayCount} tips={release.directTipCount}/>
                      ))
                  );
                }}
              </Query>
              <div className="card__more">
                <a href="#" className="card__more-link">See more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}