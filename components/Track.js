import ChangeCurrentTrack from '../graphql/mutation/local/ChangeCurrentTrack';
import {useMutation} from '@apollo/react-hooks';
import {useRouter} from 'next/router';

const Track = (props) => {
  const [changeCurrentTrack] = useMutation(ChangeCurrentTrack, {variables: {track: props.track}});
  const router = useRouter();
  return (
      <div className="track">
        <div className="track__left">
          <a href="" onClick={e => {
            e.preventDefault();
            router.push('/track/[trackId]', `/track/${props.track.id}`);
          }}>
            <div className="track__pic-container">
              <img src={props.track.trackImg} height="40" width="40" className="track__pic" alt=""/>
              {/*<div className="track__pic-overlay">*/}
              {/*  <div className="track__play"><img src="/img/icons/play.png" alt=""/></div>*/}
              {/*</div>*/}
            </div>
          </a>
          <div className="track__attr">
            <a href="" onClick={e => {
              e.preventDefault();
              router.push('/track/[trackId]', `/track/${props.track.id}`);
            }}>
              <p className="track__title">{props.track.title}</p>
            </a>
            <a href="" onClick={e => {
              e.preventDefault();
              router.push('/artist/[artistId]', `/artist/${props.track.artistId}`);
            }}>
              <p className="track__artist">{props.track.artistName}
                <span className="track__genre">{props.track.genres.join(', ')}</span></p>
            </a>
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
                onClick={()=>changeCurrentTrack()}>
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
