import Card, {More, Link} from '../Common/Card';

export default function MenuCard() {
  return (
      <Card title="Location">
        <div className="location">
          <div className="location__content">
          </div>
          <More>
            <Link href="#">See more events</Link>
          </More>
        </div>
      </Card>
  );
}
