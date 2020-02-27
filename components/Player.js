import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

let secondsCount = 0;

class Player extends React.Component {

  listen(){
    secondsCount++;
    console.log(secondsCount + " seconds played");
    if(secondsCount == 30){
      alert("We can consider this song to be 'played' now!");
    }
  }

  render() {
    return (
        <div>
          <AudioPlayer
              src="https://kickass.musicoin.org/api/test/track/download/0xc8ab5b521936de77063af770271b72736e328774"
              controls
              listenInterval={1000}
              onListen={()=> this.listen()}
          />
        </div>
    );
  };
};

export default Player;