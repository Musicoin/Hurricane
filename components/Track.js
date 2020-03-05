import IncreasePlaysMutation from '../graphql/mutation/IncreasePlaysMutation';
import StatsQuery from '../graphql/query/StatsQuery';
import CurrentTrackQuery from '../graphql/query/local/CurrentTrackQuery';
import {useApolloClient, useMutation} from '@apollo/react-hooks';

const Track = (props) => {
  const client = useApolloClient();
  const [increasePlays] = useMutation(
      IncreasePlaysMutation,
      {
        update(cache, {data: {increasePlays}}) {
          const {stats} = cache.readQuery({query: StatsQuery});
          cache.writeQuery({
            query: StatsQuery,
            data: {stats: increasePlays},
          });
        },
      });

  return (
      <div className="track">
        <div className="track__left">
          <div className="track__pic-container">
            <img src={props.image} height="34" width="34" className="track__pic" alt=""/>
            <div className="track__pic-overlay">
              <div className="track__play"><img src="/img/icons/play.png" alt=""/></div>
            </div>
          </div>
          <div className="track__attr">
            <p className="track__title">{props.track.title}</p>
            <p className="track__artist">{props.track.artistName}
              <span className="track__genre">{props.track.genres.join(', ')}</span></p>
          </div>
        </div>
        <div className="track__right">
          <div className="track__stats">
            <img src="/img/icons/like.png" className="like" alt=""/><p className="track__like">{props.track.directPlayCount ? props.track.directPlayCount : 0}</p>
          </div>
          <div className="track__stats">
            <img src="/img/icons/tip.png" className="tips" alt=""/><p className="track__tips">{props.track.directTipCount ? props.track.directTipCount : 0}</p>
          </div>
          <span className="track__dot"
                onClick={() => {
                  // client.writeData({data: {currentTrack: props.track}});
                  client.writeQuery({query: CurrentTrackQuery, data:{currentTrack: props.track}});
                  localStorage.clear();
                  // increasePlays({variables: {releaseId: props.track.tx}});
                }
                }>
          {/*<img src="/img/icons/icon-dot.png" alt=""/></span>*/}
            <img src="/img/icons/play-small.png" alt=""/></span>
          {/*<div className="track__stats">*/}
          {/*  <img src="/img/icons/like.png" className="like" alt=""/><p className="track__like">{props.track.directPlayCount?props.track.directPlayCount:0}</p>*/}
          {/*  <img src="/img/icons/tip.png" className="tips" alt=""/><p className="track__tips">{props.track.directTipCount?props.track.directTipCount:0}</p>*/}
          {/*</div>*/}
        </div>
      </div>
  );
};

export default Track;