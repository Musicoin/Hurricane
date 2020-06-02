import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import CurrentTrackQuery from '../graphql/query/local/CurrentTrackQuery';
import IncreasePlaysMutation from '../graphql/mutation/IncreasePlaysMutation';
import {Query} from 'react-apollo';
import {graphql} from 'react-apollo';
import StatsQuery from '../graphql/query/StatsQuery';
import {PlayFill, PauseFill} from 'grommet-icons';
import {Box} from 'grommet';

let secondsCount = 0;
let lastTrack;

class Player extends React.Component {

  listen(track) {
    if (lastTrack != track) {
      lastTrack = track;
      secondsCount = 1;
    } else {
      secondsCount++;
    }
    console.log(secondsCount + ' seconds played');
    if (secondsCount == 30) {
      this.props.mutate({
        variables: {releaseId: track.id},
        update: (cache, {data: {increasePlays}}) => {
          const {stats} = cache.readQuery({query: StatsQuery});
          cache.writeQuery({
            query: StatsQuery,
            data: {stats: increasePlays},
          });
        },
      });
      console.log('We can consider this song to be \'played\' now!');
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
                let trackInfo = data.currentTrack.title + ' - ' + data.currentTrack.artistName;
                return (
                    <AudioPlayer
                        src={data.currentTrack.trackUrl}
                        controls
                        listenInterval={1000}
                        onListen={() => this.listen(data.currentTrack)}
                        autoPlay
                        footer={trackInfo}
                        customIcons={
                          {
                            play: <Box round="full" pad="8px;" align="center" pad={{top: "10px", bottom: "10px", right: "8px", left: "12px"}} background="linear-gradient(to top right, #6A82FB, #FC5C7D)"><PlayFill color="white" size="20px;"/></Box>,
                            pause: <Box round="full" pad={{top: "10px", bottom: "10px", right: "8px", left: "8px"}} align="center" background="linear-gradient(to top right, #6A82FB, #FC5C7D)"><PauseFill color="white" size="20px;"/></Box>,
                          }
                        }
                    />);
              } else {
                return null;
              }
            }}
          </Query>
        </div>
    );
  };
};

export default graphql(IncreasePlaysMutation)(Player);
