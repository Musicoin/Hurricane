import React from 'react';
import Track from '../Track';
import Card, {More, Link} from '../Common/Card';

class TopPlayedCard extends React.Component {
  componentDidMount() {
    this.props.subscribeToMore();
  }

  render() {
    return (
        <Card title="Top Played">
          <div className="top-tips">
            <div className="track-container">
              {this.props.data.map(release => (
                  <Track image="/img/tracks/tracks-1.png" track={release}/>
              ))}
              <More>
                <Link href="#">See more</Link>
              </More>
            </div>
          </div>
        </Card>
    );
  }
}

export default TopPlayedCard;
