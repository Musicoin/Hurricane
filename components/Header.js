import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

const StatsQuery = gql`
    query StatsQuery {
        stats {
            plays
            tips
        }
    }
`;

const Header = () => {
  const {
    data: {stats},
  } = useQuery(StatsQuery);

  return (
      <header id="header">
        <div className="container header__container">
          <div className="header__container-left">
            <a href="#" className="">
              <img src="/img/musicoin-logo.png" className="logo" alt="Musicoin Brand"/>
            </a>
          </div>
          <div className="header__container-middle">
            <h2 className="user__count">
              <span className="user__count-num">{stats ? stats.plays : 0}</span> Played and paid by UBI,
              <span className="user__count-num"> {stats ? stats.tips : 0}</span> tips by fans.</h2>
          </div>
          <div className="header__container-right">
            <ul className="header__menu">
              <li><a href="#" className="btn btn-secondary">login</a></li>
              <li><a href="#" className="btn btn-primary">sign up</a></li>
            </ul>
          </div>
        </div>
      </header>
  );
};

export default Header;