import ChangeCurrentTrack from '../graphql/mutation/local/ChangeCurrentTrack';
import {useMutation} from '@apollo/react-hooks';
import {useRouter} from 'next/router';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 4px;
    border-bottom: 1px solid #E6ECF0;
    p{
      font-size: ${props => props.theme.em(12, props.theme.baseFontSize)};
    }
    &:hover {
      background-color: #E6ECF0;
    }
`;

const Left = styled.div`
    display: flex;
`;

const Link = styled.a`
    text-decoration: none;
`;

const PictureContainer = styled.div`
    position: relative;
      // &:hover .track__pic-overlay {
      //   opacity: 1;
      // }
`;

const Picture = styled.img`
    display: block;
`;

const Attr = styled.div`
    margin-left: 8px;
    margin-right: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Title = styled.p`
    margin-bottom: 0px;
    color: black;
`;

const Artist = styled.p`
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 0px;
    font-size: ${props => props.theme.em(14, props.theme.baseFontSize)};
    color: #8899A6;
    span{
      font-style: italic;
       margin-left: 8px;
       font-size: ${props => props.theme.em(10, props.theme.baseFontSize)};
       color: #8899A6;
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`;

const Stats = styled.div`
   
    align-items: center;
    display: flex;
    align-self: center;
    width: 70px;
    & > img {
      height: 12px;
      margin-top: 1px;
    }
    & > p {
      font-size: ${props => props.theme.em(12, props.theme.baseFontSize)};
      color: #8899A6;
    }
`;

const Dot = styled.span`
    margin-right: 10px;
    margin-left: 10px;
    align-self: center;
    // background-color: red;
    //align-self: center;
    //margin-bottom: 30px;
`;

const Number = styled.p`
    margin-left: 4px;
    font-size: ${props => props.theme.em(12, props.theme.baseFontSize)};
    color: #8899A6;
`

const Track = (props) => {
  const [changeCurrentTrack] = useMutation(ChangeCurrentTrack, {variables: {track: props.track}});
  const router = useRouter();
  return (
      <Wrapper>
        <Left>
          <Link href="" onClick={e => {
            e.preventDefault();
            router.push('/track/[trackId]', `/track/${props.track.id}`);
          }}>
            <PictureContainer>
              <Picture src={props.track.trackImg} height="40" width="40" alt=""/>
              {/*<div className="track__pic-overlay">*/}
              {/*  <div className="track__play"><img src="/img/icons/play.png" alt=""/></div>*/}
              {/*</div>*/}
            </PictureContainer>
          </Link>
          <Attr>
            <Link href="" onClick={e => {
              e.preventDefault();
              router.push('/track/[trackId]', `/track/${props.track.id}`);
            }}>
              <Title>{props.track.title}</Title>
            </Link>
            <Link href="" onClick={e => {
              e.preventDefault();
              router.push('/artist/[artistId]', `/artist/${props.track.artistId}`);
            }}>
              <Artist>{props.track.artistName} <span>{props.track.genres.join(', ')}</span>
              </Artist>
            </Link>
          </Attr>
        </Left>
        <Right>
          <Stats>
            <img height="12" width="12" src="/img/icons/like.png" alt=""/><Number>{props.track.directPlayCount ? props.track.directPlayCount : 0}</Number>
          </Stats>
          <Stats>
            <img height="12" width="12" src="/img/icons/tip.png" alt=""/><Number>{props.track.directTipCount ? props.track.directTipCount : 0}</Number>
          </Stats>
          <Dot
              onClick={() => changeCurrentTrack()}>
            {/*<img src="/img/icons/icon-dot.png" alt=""/></span>*/}
            <img src="/img/icons/play-small.png" alt=""/>
          </Dot>
        </Right>
      </Wrapper>
  );
};

export default Track;
