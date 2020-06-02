import Layout from '../../components/MyLayout';
import GetArtistQuery from '../../graphql/query/GetArtistQuery';

import {useRouter} from 'next/router';

import {Query} from 'react-apollo';
import React from 'react';
import Track from '../../components/Track';

import {Avatar, Box, Button, Tab, Tabs, Text} from 'grommet';

import {Heading} from 'grommet';
import {ShareOption, Group} from 'grommet-icons';

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
                  <Box alignContent="center">
                    <Box background="linear-gradient(#F2D099, #F9F9F9)" pad="large">
                      <Box basis="full" width="1200px" align="center" justify="start" alignSelf="center" gap="medium" direction="row">
                        <Avatar src={artist.imageUrl} size="184px"/>
                        <Box height="184px" direction="column" justify="around">
                          <Text weight="bold" size="40px">{artist.name}</Text>
                          <Box direction="row" gap="xsmall" align="center">
                            <Box background="linear-gradient(to top right, #6A82FB, #FC5C7D)">
                              <Button plain margin="5px" color="white" size="small" icon={<Group color="white" size="small"/>} label={<Text size="12px">Follow</Text>}/>
                            </Box>
                            <Button plain margin="xsmall" color="brand" size="small" icon={<ShareOption color="brand" size="small"/>}/>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box alignSelf="center" basis="full" width="1200px">
                      <Tabs justify="start">
                        <Tab title="Tracks">
                          <Box>
                            <Heading level="3" margin={{'bottom': '12px'}}>Tracks</Heading>
                            <div>
                              {artist.artistTracks.map(release => (
                                  <Track key={release.tx} track={release}/>
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
                    </Box>
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
