import Card, {More, Link} from '../Common/Card';

export default function EventsCard() {
  return (
      <Card title="Events">
        <div className="event__container">
          <div className="event">
            <div className="event__schedule">
              <div className="event__day">TUE</div>
              <div className="event__date">09</div>
              <div className="event__mo">JUL</div>
            </div>
            <div className="event__attr">
              <div className="event__title">
                AMA Singer with Pascal Guyon
              </div>
              <div className="event__time">
                Pascalguyon.com
              </div>
              <div className="event__time">
                8:00 PM GMT
              </div>
            </div>
          </div>
          <div className="event">
            <div className="event__schedule">
              <div className="event__day">TUE</div>
              <div className="event__date">09</div>
              <div className="event__mo">JUL</div>
            </div>
            <div className="event__attr">
              <div className="event__title">
                AMA Singer with Pascal Guyon
              </div>
              <div className="event__time">
                Pascalguyon.com
              </div>
              <div className="event__time">
                8:00 PM GMT
              </div>
            </div>
          </div>
          <div className="event">
            <div className="event__schedule">
              <div className="event__day">TUE</div>
              <div className="event__date">09</div>
              <div className="event__mo">JUL</div>
            </div>
            <div className="event__attr">
              <div className="event__title">
                AMA Singer with Pascal Guyon
              </div>
              <div className="event__time">
                Pascalguyon.com
              </div>
              <div className="event__time">
                8:00 PM GMT
              </div>
            </div>
          </div>
          <More>
            <Link href="#">See more events</Link>
          </More>
        </div>
      </Card>
  );
}
