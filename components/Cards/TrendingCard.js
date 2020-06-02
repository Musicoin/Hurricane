import React from 'react';
import Track from '../Track';
import Card, {More, Link} from '../Common/Card';

class TrendingCard extends React.Component {
  componentDidMount() {
    this.props.subscribeToMore();
  }

  render() {
    return (
        <Card>
          <div className="top-tips">
            <div className="track-container">
              {this.props.data.map(release => (
                  <Track key={release.tx} track={release}/>
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

export default TrendingCard;
