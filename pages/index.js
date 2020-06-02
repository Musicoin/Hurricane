import Layout from '../components/MyLayout';
import TrendingCard from '../components/Cards/TrendingCard';
import TrendingReleasesQuery from '../graphql/query/TrendingReleasesQuery';
import TrendingListUpdatedSubscription from '../graphql/subscription/TrendingListUpdatedSubscription';

import {Query} from 'react-apollo';

import {Box, Heading, Image, Text} from 'grommet';
import {useRouter} from 'next/router';

const Home = () => {
  const router = useRouter();
  return (
      <Box margin={{'top': '10px'}} alignSelf="center" width="900px">
        <Query query={TrendingReleasesQuery} variables={{limit: 20}}>
          {({loading, error, data, subscribeToMore}) => {
            if (loading) return (<p>Loading...</p>);
            if (error) return (<p>Error: {error.message}</p>);
            const more = () => subscribeToMore({
              document: TrendingListUpdatedSubscription,
              updateQuery: (prev, {subscriptionData}) => {
                if (!subscriptionData.data.trendingListUpdated) return prev;
                let releases = subscriptionData.data.trendingListUpdated;
                return Object.assign({}, prev, {
                  trendingList: releases,
                });
              },
            });
            return (
                <Box>
                  <Heading margin={{vertical: 'medium'}} level={2}>Recommendation list</Heading>
                  <Box direction="row" justify="between" margin={{bottom: 'medium'}}>
                    {data.trendingList.slice(0, 5).map(track =>
                        <Box direction="column" align="center" width="168px" gap="xsmall" onClick={e => {
                          e.preventDefault();
                          router.push('/track/[trackId]', `/track/${track.id}`);
                        }}>
                          <Image width="168" height="168" src={track.trackImg}/>
                          <Box>
                            <Text size="16px" textAlign="center">{track.title}</Text>
                            <Text size="14px" textAlign="center" color="#8897A2">{track.artistName}</Text>
                          </Box>
                        </Box>,
                    )}
                  </Box>
                  <TrendingCard data={data.trendingList} subscribeToMore={more}/>
                </Box>
            );
          }}
        </Query>
      </Box>
  );
};

Home.Layout = Layout;

export default Home;
