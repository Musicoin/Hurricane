import {useMutation, useQuery} from '@apollo/react-hooks';
import AOWQuery from '../../graphql/query/AOWQuery';
import ChangeCurrentTrack from '../../graphql/mutation/local/ChangeCurrentTrack';
import styled from 'styled-components';
import Card from '../Common/Card';

const AOW = styled.div``;

const PictureBox = styled.div`
    width: 100%;
    height: 144px;
    background-color: #e9e9e9;
`;

const Picture = styled.img`
    width: 100%;
    height: 144px;
    object-fit: cover;
`;

const Attr = styled.div`
    padding: 8px 16px;
    display: flex;
    border-bottom: 1px solid #E6ECF0;
`;

const Text = styled.div`
    margin-left: 8px;
`;

const Track = styled.p`
    font-size: ${props => props.theme.em(14, props.theme.baseFontSize)};
    margin-bottom: 2px;
`;

const Artist = styled.p`
    font-size: ${props => props.theme.em(12, props.theme.baseFontSize)};
    color: #8899A6;
`;

export default function AOWCard() {
  const {loading, error, data} = useQuery(AOWQuery);
  const [changeCurrentTrack] = useMutation(ChangeCurrentTrack);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const aow = data.getArtistOfTheWeek;

  return (
      <Card title="Artist of the week">
        <AOW>
          <PictureBox>
            <Picture src={aow.artist.imageUrl} alt=""/>
          </PictureBox>
          <Attr>
            <div onClick={() => changeCurrentTrack({variables: {track: aow.release}})}>
              <img src="/img/icons/play.png" alt=""/>
            </div>
            <Text>
              <Track>{aow.release.title}</Track>
              <Artist>{aow.artist.name}</Artist>
            </Text>
          </Attr>
        </AOW>
      </Card>
  );
}
