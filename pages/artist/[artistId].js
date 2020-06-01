import Layout from '../../components/MyLayout';
import GetArtistQuery from '../../graphql/query/GetArtistQuery';

import {useRouter} from 'next/router';

import {Query} from 'react-apollo';
import React from 'react';
import Track from '../../components/Track';

import {Avatar, Box, Tab, Tabs} from 'grommet';
import styled from 'styled-components';
import {Container} from '../../components/Common/Layout';

import {Heading} from 'grommet';

const Header = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-image: linear-gradient(#F2D099, #F9F9F9);
`;

const Artist = (props) => {
  const router = useRouter();
  const {artistId} = router.query;

  return (
      <Query query={GetArtistQuery} variables={{id: artistId}}>
        {({loading, error, data}) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          if (data && data.getArtist) {
            let artist = data.getArtist;

            return (
                <>
                  <Box basis="full">
                    <Header>
                      <Container>
                        <Avatar src={artist.imageUrl} size="184px"/>
                      </Container>
                    </Header>
                    <Container>
                      <Tabs justify="start">
                        <Tab title="Tracks">
                          <Box>
                            <Heading level="3" margin={{'bottom': '12px'}}>Tracks</Heading>
                            <div>
                              {artist.artistTracks.map(release => (
                                  <Track key={release.tx}track={release}/>
                              ))}
                            </div>
                          </Box>
                        </Tab>
                        <Tab title="About">
                          <Box>
                            <Heading level="3" margin={{'bottom': '12px'}}>About</Heading>
                            <p>{artist.description}</p>
                          </Box>
                        </Tab>
                      </Tabs>
                    </Container>
                    <hr/>
                  </Box>
                </>
            );
          }
        }}
      </Query>
  );
};

Artist.Layout = Layout;
export default Artist;
