export default function MobileAppCard() {
  return (
      <div className="card">
        <div className="card__title transparent">
          <p className="card__title--left ">Get musicoin mobile app</p>
        </div>
        <div className="card__content">
          <div className="app-download">
            <div className="app-download__container">
              <a href="#"><img src="/img/icons/apple-store.png" alt="Apple Store"/></a>
              <a href=""><img src="/img/icons/google-play-store.png" alt="Goole Play Store"/></a>
            </div>
          </div>
        </div>
      </div>
  );
}