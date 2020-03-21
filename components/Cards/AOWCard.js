import {useQuery} from '@apollo/react-hooks';
import AOWQuery from '../../graphql/query/AOWQuery';

export default function AOWCard() {
  const {loading, error, data} = useQuery(AOWQuery);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const artist = data.getArtistOfTheWeek[0];

  return (
      <div className="card">
        <div className="card__title">
          <p>Artist of the week</p>
        </div>
        <div className="card__content">
          <div className="aow">
            <div className="aow__container">
              <div className="aow__pic">
                <img src={artist.imageUrl} alt="" className="aow__pic-file"/>
              </div>
              <div className="aow__attr">
                <div className="aow__attr--player">
                  <img src="/img/icons/play.png" alt=""/>
                </div>
                <div className="aow__attr-text">
                  <p className="aow__attr-track">Track's title</p>
                  <p className="aow__attr-artist">{artist.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}