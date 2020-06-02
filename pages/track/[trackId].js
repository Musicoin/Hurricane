import React, {useEffect} from 'react';
import Layout from '../../components/MyLayout';
import GetReleaseByIdQuery from '../../graphql/query/GetReleaseByIdQuery';

import {useRouter} from 'next/router';
import {useLazyQuery, useMutation} from '@apollo/react-hooks';
import {Box, Tab, Tabs, Image, Text, Button} from 'grommet';
import GetArtistQuery from '../../graphql/query/GetArtistQuery';
import Track from '../../components/Track';
import {PlayFill, Favorite, Money, ShareOption, AddCircle} from 'grommet-icons';
import ChangeCurrentTrack from '../../graphql/mutation/local/ChangeCurrentTrack';

const TrackPage = (props) => {
  const router = useRouter();
  const {trackId} = router.query;
  const [getArtist, {called: artistCalled, loading: artistLoading, data: artistData, error: artistError}] = useLazyQuery(GetArtistQuery);
  const [getTrack, {called, loading, data, error}] = useLazyQuery(GetReleaseByIdQuery, {
    variables: {id: trackId},
    onCompleted: data => {
      console.log('getArtist');
      getArtist({variables: {id: data.getReleaseById.artistId}});
    },
  });
  const [changeCurrentTrack] = useMutation(ChangeCurrentTrack);

  useEffect(() => {
    //ToDo: improve this mechanism so that artist will be loaded every time the track query runs, for some reason the onCompleted method doesn't
    // run anymore if the page has been visited before
    if (!data) {
      getTrack();
    }
    if (data && data.getReleaseById.artistId && !artistData) {
      getArtist({variables: {id: data.getReleaseById.artistId}});
    }
  }, [data]);

  if (!called || loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data && data.getReleaseById) {
    let release = data.getReleaseById;
    return (
        <Box alignContent="center">
          <Box background="linear-gradient(#F2D099, #F9F9F9)" pad="large">
            <Box basis="full" width="1200px" align="center" justify="start" alignSelf="center" gap="medium" direction="row">
              <Image height="184px" width="184px" src={release.trackImg}/>
              <Box height="184px" direction="column" justify="between">
                <Box direction="row" gap="small">
                  <Box round="full" background="linear-gradient(to top right, #6A82FB, #FC5C7D)">
                    <Button hoverIndicator icon={<PlayFill color="white"/>} onClick={() => changeCurrentTrack({variables: {track: release}})}/>
                  </Box>
                  <Text weight="bold" size="40px">{release.title}</Text>
                </Box>
                <Text size="16px">by <Text weight="bold" size="16px">{release.artistName}</Text></Text>
                <Box direction="row" align="center" justify="between">
                  <Box direction="row" gap="xsmall" align="center">
                    <PlayFill color="brand" size="small"/>
                    <Text size="12px">{release.directPlayCount}</Text>
                  </Box>
                  <Box direction="row" gap="xsmall" align="center">
                    {release.genres.map((genre) => (
                        <Box key={genre} border={{color: 'brand', size: 'xsmall'}} pad="5px" round="xsmall">
                          <Text size="10px">{genre}</Text>
                        </Box>),
                    )}
                  </Box>
                </Box>
                <Image src="/img/soundwave.png"/>
                <Box direction="row" gap="xsmall" align="center">
                  <Box background="linear-gradient(to top right, #6A82FB, #FC5C7D)">
                    <Button plain margin="5px" color="white" size="small" icon={<Money color="white" size="small"/>} label={<Text size="12px">Tip</Text>}/>
                  </Box>
                  <Box direction="row" gap="xsmall" align="small">
                    <Favorite color="brand" size="small"/>
                    <Text size="12px">{release.directTipCount}</Text>
                  </Box>
                  <Button plain margin="xsmall" color="brand" size="small" icon={<ShareOption color="brand" size="small"/>}/>
                  <Button plain margin="xsmall" color="brand" size="small" icon={<AddCircle color="brand" size="small"/>}/>
                </Box>
              </Box>

            </Box>
          </Box>
          <Box alignSelf="center" basis="full" width="1200px">
            <Tabs justify="start">
              <Tab title="Related Tracks">
                <Box>
                  {!artistCalled || artistLoading && <p>Loading...</p>}
                  {!artistCalled || artistError && <p>Error: {artistError.message}</p>}
                  {(artistData && artistData.getArtist) &&
                  <div>
                    {artistData.getArtist.artistTracks.map(release => (
                        <Track key={release.tx} track={release}/>
                    ))}
                  </div>
                  }
                </Box>
              </Tab>
            </Tabs>
          </Box>
        </Box>
    );
  }
};

TrackPage.Layout = Layout;
export default TrackPage;
