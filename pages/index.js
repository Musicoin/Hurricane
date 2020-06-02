import Layout from '../components/MyLayout';
import MenuCard from '../components/Cards/MenuCard';
import SocialCard from '../components/Cards/SocialCard';
import MobileAppCard from '../components/Cards/MobileAppCard';
import AOWCard from '../components/Cards/AOWCard';
import NewArtistCard from '../components/Cards/NewArtistCard';
import DebutsCard from '../components/Cards/DebutsCard';
import EventsCard from '../components/Cards/EventsCard';
import LocationCard from '../components/Cards/LocationCard';
import TrendingCard from '../components/Cards/TrendingCard';
import TrendingReleasesQuery from '../graphql/query/TrendingReleasesQuery';
import TrendingListUpdatedSubscription from '../graphql/subscription/TrendingListUpdatedSubscription';

import {Query} from 'react-apollo';

import {Box, Grid} from 'grommet';

const Home = () => {
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
