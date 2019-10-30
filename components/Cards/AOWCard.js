export default function AOWCard(){
  return(
      <div className="card">
        <div className="card__title">
          <p>Artist of the week</p>
        </div>
        <div className="card__content">
          <div className="aow">
            <div className="aow__container">
              <div className="aow__pic">
                <img src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="" className="aow__pic-file"/>
              </div>
              <div className="aow__attr">
                <div className="aow__attr--player">
                  <img src="/img/icons/play.png" alt=""/>
                </div>
                <div className="aow__attr-text">
                  <p className="aow__attr-track">Track's title</p>
                  <p className="aow__attr-artist">Artist's name</p>
                </div>
              </div>
            </div>

            <div className="card__more">
              <a href="#" className="card__more-link">See more artists of the week</a>
            </div>
          </div>
        </div>
      </div>
  )
}