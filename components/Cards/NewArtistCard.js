export default function NewArtistCard(){
  return(
      <div className="card">
        <div className="card__title">
          <p>New Artists</p>
        </div>
        <div className="card__content">
          <div className="new-artist">
            <div className="new-artist__badge">
              <div className="new-artist__pic">
                <img src="/img/artist/artist-1.png" alt=""/>
              </div>
              <div className="new-artist__pic">
                <img src="/img/artist/artist-2.png" alt=""/>
              </div>
              <div className="new-artist__pic">
                <img src="/img/artist/artist-3.png" alt=""/>
              </div>
              <div className="new-artist__pic">
                <img src="/img/artist/artist-4.png" alt=""/>
              </div>
              <div className="new-artist__pic">
                <img src="/img/artist/artist-5.png" alt=""/>
              </div>
              <div className="new-artist__pic">
                <img src="/img/artist/artist-6.png" alt=""/>
              </div>
              <div className="new-artist__pic">
                <img src="/img/artist/artist-7.png" alt=""/>
              </div>
              <div className="new-artist__pic">
                <img src="/img/artist/artist-8.png" alt=""/>
              </div>
            </div>
            <div className="card__more">
              <a href="#" className="card__more-link">See more new artists</a>
            </div>
          </div>
        </div>
      </div>
  )
}