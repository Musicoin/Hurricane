const Track = (props) => (
    <div className="track">
      <div className="track__left">
        <div className="track__pic-container">
          <img src={props.image} className="track__pic" alt=""/>
          <div className="track__pic-overlay">
            <div className="track__play"><img src="/img/icons/play.png" alt=""/></div>
          </div>
        </div>
        <div className="track__attr">
          <p className="track__title">{props.title}</p>
          <p className="track__artist">{props.artist}</p>
          <p className="track__genre">{props.genre}</p>
        </div>
      </div>
      <div className="track__right">
        <span className="track__dot"><img src="/img/icons/icon-dot.png" alt=""/></span>
        <div className="track__stats">
          <img src="/img/icons/like.png" className="like" alt=""/><p className="track__like">{props.likes}</p>
          <img src="/img/icons/tip.png" className="tips" alt=""/><p className="track__tips">{props.tips}</p>
        </div>
      </div>
    </div>
);

export default Track;