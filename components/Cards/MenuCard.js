export default function MenuCard(){
  return(
      <div className="card">
        <div className="card__title">
          <p className="card__title--left">Menu</p>
        </div>
        <div className="card__content">
          <div className="menu">
            <ul className="menu__list">
              <a href="#">
                <li className="menu__link">What is Musicoin?</li>
              </a>
              <a href="#">
                <li className="menu__link">Team</li>
              </a>
              <a href="#">
                <li className="menu__link">Whitepaper</li>
              </a>
              <a href="#">
                <li className="menu__link">Legal</li>
              </a>
              <a href="#">
                <li className="menu__link">FAQ</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
  )
}