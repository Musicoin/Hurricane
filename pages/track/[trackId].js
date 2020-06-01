import React, {useEffect} from 'react';
import Layout from '../../components/MyLayout';
import GetReleaseByIdQuery from '../../graphql/query/GetReleaseByIdQuery';

import {useRouter} from 'next/router';
import {useLazyQuery} from '@apollo/react-hooks';
import styled from 'styled-components';
import {Box,Tab, Tabs, Image} from 'grommet';
import {Container} from '../../components/Common/Layout';
import GetArtistQuery from '../../graphql/query/GetArtistQuery';
import Track from '../../components/Track';

const Header = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-image: linear-gradient(#F2D099, #F9F9F9);
`;

const TrackPage = (props) => {
  const router = useRouter();
  const {trackId} = router.query;
  const [getArtist, {called: artistCalled, loading: artistLoading, data: artistData}] = useLazyQuery(GetArtistQuery);
  const [getTrack, {called, loading, data, error}] = useLazyQuery(GetReleaseByIdQuery, {
    variables: {id: trackId},
    onCompleted: data => {
      getArtist({variables: {id: data.getReleaseById.artistId}});
    },
  });

  useEffect(() => {
    getTrack();
  }, []);

  if (!called || loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data && data.getReleaseById) {
    let release = data.getReleaseById;
    return (
        <Box basis="full">
          <Header>
            <Container>
              <Image height="184px" width="184px" src={release.trackImg} size="184px"/>
            </Container>
          </Header>
          <Container>
            <Tabs justify="start">
              <Tab title="Related Tracks">
                <Box>
                  {!artistCalled || artistLoading && <p>Loading...</p>}
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
          </Container>
          <hr/>
        </Box>
    );
  }
};

TrackPage.Layout = Layout;
export default TrackPage;
