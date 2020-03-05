import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import CurrentTrackQuery from '../graphql/query/local/CurrentTrackQuery';
import {Query} from 'react-apollo';

let secondsCount = 0;

class Player extends React.Component {

  listen() {
    secondsCount++;
    console.log(secondsCount + ' seconds played');
    if (secondsCount == 30) {
      alert('We can consider this song to be \'played\' now!');
    }
  }

  render() {
    return (
        <div>
          <Query query={CurrentTrackQuery}>
            {({loading, error, data}) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error.message}</p>;
              if (data && data.currentTrack) {
                let trackInfo = data.currentTrack.title + " - " + data.currentTrack.artistName;
                return (
                    <AudioPlayer
                        src={data.currentTrack.trackUrl}
                        controls
                        listenInterval={1000}
                        onListen={() => this.listen()}
                        autoPlay
                        footer={trackInfo}
                    />);
              }else{
                return null;
              }
            }}
          </Query>
        </div>
    );
  };
};

export default Player;