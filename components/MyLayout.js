import Header from './Header';
import Head from 'next/head';

const Layout = props => (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" type="text/css" href="/css/cssreset-min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="/css/scss/style.css"/>
        <title>Musicoin - Homepage</title>
      </Head>
      <Header/>
      <div id="content">
        <div className="container content__container">
          {props.children}
        </div>
      </div>
      <div id="player">
        <div className="player__container">
          <div className="player__left">
            <div className="player__pic">
              <img src="/img/tracks/tracks-1.png" alt="" className="player__pic-file"/>
            </div>
            <div className="player__attr">
              <p className="player__title">Track's title</p>
              <p className="player__artist">Artist's name</p>
            </div>
          </div>
          <div className="player__middle">
            <div className="player__controller">
              <div className="player__controller-repeat"><img src="/img/icons/repeat.svg" alt=""/></div>
              <div className="player__controller-previous"><img src="/img/icons/prev.svg" alt=""/></div>
              <div className="player__controller-play"><img src="/img/icons/play.svg" alt=""/></div>
              <div className="player__controller-next"><img src="/img/icons/next.svg" alt=""/></div>
              <div className="player__controller-shuffle"><img src="/img/icons/shuffle.svg" alt=""/></div>
            </div>
            <div className="player__duration">
              <div className="player__controller-duration"><img src="/img/icons/duration.svg" alt=""/></div>
              <div className="player__controller-tipping"><img src="/img/icons/tipping.svg" alt=""/></div>

            </div>
          </div>
          <div className="player__right">
            <div className="player__synth">
              <div className="player__synth-volume"><img src="/img/icons/volume.svg" alt=""/></div>
              <div className="player__synth-queue"><img src="/img/icons/queue.svg" alt=""/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Layout;