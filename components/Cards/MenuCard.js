import Card from '../Common/Card';

export default function MenuCard() {
  return (
      <Card title="Menu">
        <div className="menu">
          <ul className="menu__list">
            <a href="https://musicoin.org/how-it-works">
              <li className="menu__link">What is Musicoin?</li>
            </a>
            <a href="https://musicoin.org/team">
              <li className="menu__link">Team</li>
            </a>
            <a href="https://drive.google.com/file/d/1KVvcwPKUngMNffgWW65k1p4UvKg5QG0u/view">
              <li className="menu__link">Whitepaper</li>
            </a>
            <a href="https://musicoin.org/legal/legal">
              <li className="menu__link">Legal</li>
            </a>
            <a href="https://musicoin.org/resources/faq">
              <li className="menu__link">FAQ</li>
            </a>
          </ul>
        </div>
      </Card>
  );
}
