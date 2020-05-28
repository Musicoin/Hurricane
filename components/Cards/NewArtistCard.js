import {useQuery} from '@apollo/react-hooks';
import NewArtistsQuery from '../../graphql/query/NewArtistsQuery';
import Card, {More, Link} from '../Common/Card';

export default function NewArtistCard() {
  const {loading, error, data} = useQuery(NewArtistsQuery, {variables: {limit: 8}});

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
      <Card title="New Artists">
        <div className="new-artist">
          <div className="new-artist__badge">
            {data.getNewArtists.map(artist => (
                <div key={artist.artistAddress} className="new-artist__pic">
                  <img height="48" width="48" src={artist.imageUrl} alt={artist.name} title={artist.name}/>
                </div>
            ))}
          </div>
        </div>
        <More>
          <Link href="#">See more new artists</Link>
        </More>
      </Card>
  );
}
