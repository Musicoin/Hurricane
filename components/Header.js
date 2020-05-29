import StatsQuery from '../graphql/query/StatsQuery';
import PlaysIncreasedSubscription from '../graphql/subscription/PlaysIncreasedSubscription';
import {Query} from 'react-apollo';
import StatsComponent from './Stats';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import {PrimaryButton, SecondaryButton} from './Common/Button';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 0 0;
    background-color: #fff;
    width: 100%;
    height: 64px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

const Container = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    
`;

const Middle = styled.div`
    
`;

const Right = styled.div`
    
`;

const Menu = styled.ul`
     display: flex;
     justify-content: space-between;
     li {
       margin-left: 16px;
     }
`;

function Header() {
  const router = useRouter();
  return (
      <header id="header">
        <Container>
          <Left>
            <a href="" onClick={e => {
              e.preventDefault();
              router.push('/', '/');
            }}>
              <img src="/img/debut.png" alt="Debut"/>
            </a>
          </Left>
          <Middle>
            {/*<Query query={StatsQuery}>*/}
            {/*  {({loading, error, data, subscribeToMore}) => {*/}
            {/*    if (loading) return (<p>Loading...</p>);*/}
            {/*    if (error) return (<p>Error: {error.message}</p>);*/}
            {/*    const more = () => subscribeToMore({*/}
            {/*      document: PlaysIncreasedSubscription,*/}
            {/*      updateQuery: (prev, {subscriptionData}) => {*/}
            {/*        if (!subscriptionData.data.playsIncreased) return prev;*/}
            {/*        let stats = subscriptionData.data.playsIncreased;*/}
            {/*        return Object.assign({}, prev, {*/}
            {/*          stats,*/}
            {/*        });*/}
            {/*      },*/}
            {/*    });*/}
            {/*    return <StatsComponent stats={data.stats} subscribeToMore={more}/>;*/}
            {/*  }}*/}
            {/*</Query>*/}
          </Middle>
          <Right>
            <Menu>
              <li><PrimaryButton href="#">Musician</PrimaryButton></li>
              <li><SecondaryButton href="#"><img height="12" width="12" src="/img/icons/coil.png" /> Sign in with Coil</SecondaryButton></li>
            </Menu>
          </Right>
        </Container>
      </header>
  );

}

export default Header;
