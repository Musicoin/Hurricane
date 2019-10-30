import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = props => (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="/css/style.css"/>
      <title>Musicoin - Homepage</title>
    </head>
    <body>
    <Header/>
    <div id="content">
      <div className="container content__container">
        {props.children}
      </div>
    </div>
    <div id="player">
      <div class="player__container">
        <div class="player__left">
          <div class="player__pic">
            <img src="/img/tracks/tracks-1.png" alt="" class="player__pic-file"/>
          </div>
          <div class="player__attr">
            <p class="player__title">Track's title</p>
            <p class="player__artist">Artist's name</p>
          </div>
        </div>
        <div class="player__middle">
          <div class="player__controller">
            <div class="player__controller-repeat"><img src="/img/icons/repeat.svg" alt=""/></div>
            <div class="player__controller-previous"><img src="/img/icons/prev.svg" alt=""/></div>
            <div class="player__controller-play"><img src="/img/icons/play.svg" alt=""/></div>
            <div class="player__controller-next"><img src="/img/icons/next.svg" alt=""/></div>
            <div class="player__controller-shuffle"><img src="/img/icons/shuffle.svg" alt=""/></div>
          </div>
          <div class="player__duration">
            <div class="player__controller-duration"><img src="/img/icons/duration.svg" alt=""/></div>
            <div class="player__controller-tipping"><img src="/img/icons/tipping.svg" alt=""/></div>

          </div>
        </div>
        <div class="player__right">
          <div class="player__synth">
            <div class="player__synth-volume"><img src="/img/icons/volume.svg" alt=""/></div>
            <div class="player__synth-queue"><img src="/img/icons/queue.svg" alt=""/></div>
          </div>
        </div>
      </div>
    </div>
    </body>
    </html>
);

export default Layout;