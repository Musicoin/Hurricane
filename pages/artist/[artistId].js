import Layout from '../../components/MyLayout';
import GetArtistQuery from '../../graphql/query/GetArtistQuery';

import {useRouter} from 'next/router';

import {Query} from 'react-apollo';
import React from 'react';
import Track from '../../components/Track';

import {Anchor, Avatar, Box, Button, Tab, Tabs, Text, Heading} from 'grommet';
import {ShareOption, Group, StatusGood, Globe, Facebook, Twitter, Google, Soundcloud, Youtube} from 'grommet-icons';

import Loading from '../../components/Common/Loading';

const Artist = (props) => {
  const router = useRouter();
  const {artistId} = router.query;

  return (
      <Query query={GetArtistQuery} variables={{id: artistId}}>
        {({loading, error, data}) => {
          if (loading) return <Loading/>;
          if (error) return <p>Error: {error.message}</p>;
          if (data && data.getArtist) {
            let artist = data.getArtist;
            return (
                <>
                  <Box alignContent="center">
                    <Box background="linear-gradient(#F2D099, #F9F9F9)" pad="large">
                      <Box basis="full" width="1200px" align="center" justify="start" alignSelf="center" gap="medium" direction="row">
                        <Avatar src={artist.imageUrl} size="184px"/>
                        <Box height="184px" width="992px" direction="row" justify="between">
                          <Box direction="column" justify="around">
                            <Box direction="row" gap="small" align="center">
                              <Text weight="bold" size="40px">{artist.name}</Text>
                              {artist.verified && <StatusGood color="#51C181"/>}
                            </Box>
                            {artist.draftProfile.regions && <Text size="16px">{artist.draftProfile.regions}</Text>}
                            <Box direction="row" gap="xsmall" align="center">
                              <Box background="linear-gradient(to top right, #6A82FB, #FC5C7D)">
                                <Button plain gap="xsmall" margin={{horizontal: '10px', vertical: '5px'}} color="white" size="small" icon={<Group color="white" size="small"/>} label={<Text size="12px">Follow</Text>}/>
                              </Box>
                              <Button plain pad="medium" color="brand" size="medium" icon={<ShareOption color="brand" size="small"/>}/>
                            </Box>
                          </Box>
                          <Box direction="column" justify="around">
                            <Box direction="row" justify="end" gap="medium">
                              <Box align="center" justify="center">
                                <Text size="32px" weight="bold">{artist.followers}</Text>
                                <Text size="16px">Followers</Text>
                              </Box>
                              <Box align="center" justify="center">
                                <Text size="32px" weight="bold">{artist.tipCount}</Text>
                                <Text size="16px">Tipped</Text>
                              </Box>
                              <Box align="center" justify="center">
                                <Text size="32px" weight="bold">{artist.totalArtistPlays}</Text>
                                <Text size="16px">Plays</Text>
                              </Box>
                            </Box>
                            <Box direction="row" justify="end" gap="small">
                              {artist.social.website && <Box align="center" justify="center">
                                <Anchor href={artist.social.website} icon={<Globe size="20px"/>}/>
                              </Box>}
                              {artist.social.facebook && <Box align="center" justify="center">
                                <Anchor href={artist.social.facebook} icon={<Facebook size="20px"/>}/>
                              </Box>}
                              {artist.social.twitter && <Box align="center" justify="center">
                                <Anchor href={artist.social.twitter} icon={<Twitter size="20px"/>}/>
                              </Box>}
                              {artist.social.google && <Box align="center" justify="center">
                                <Anchor href={artist.social.google} icon={<Google size="20px"/>}/>
                              </Box>}
                              {artist.social.soundcloud && <Box align="center" justify="center">
                                <Anchor href={artist.social.soundcloud} icon={<Soundcloud size="20px"/>}/>
                              </Box>}
                              {artist.social.youtube && <Box align="center" justify="center">
                                <Anchor href={artist.social.youtube} icon={<Youtube size="20px"/>}/>
                              </Box>}
                            </Box>
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
