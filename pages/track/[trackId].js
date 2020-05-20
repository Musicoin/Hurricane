import Layout from '../../components/MyLayout';
import GetReleaseByIdQuery from '../../graphql/query/GetReleaseByIdQuery';

import {useRouter} from 'next/router';

import {Query} from 'react-apollo';
import AudioPlayer from 'react-h5-audio-player';
import React from 'react';

const Track = (props) => {
  const router = useRouter();
  const {trackId} = router.query;

  return (
      <div className="content__container-middle">
        <Query query={GetReleaseByIdQuery} variables={{id: trackId}}>
          {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            if (data && data.getReleaseById) {
              let release = data.getReleaseById;
              let trackInfo = release.title + ' - ' + release.artistName;
              return (
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                    <img src={release.trackImg} height="300" width="300" className="track__pic" alt=""/>
                    <AudioPlayer
                        src={release.trackUrl}
                        controls
                        style={{position: 'relative', height: 150}}
                        listenInterval={1000}
                        footer={trackInfo}
                    />
                  </div>
              );
            }

          }}
        </Query>
      </div>
  );
};
Track.Layout = Layout;
export default Track;
