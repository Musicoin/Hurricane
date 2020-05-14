import Header from './Header';
import Player from './Player';
import Head from 'next/head';
import WebMonetizationCard from './Cards/WebMonetizationCard';

const Layout = props => (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" type="text/css" href="/css/cssreset-min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="/css/player.css"/>
        <link rel="stylesheet" href="/css/scss/style.css"/>
        <title>Musicoin</title>
        <meta name="monetization" content="$coil.xrptipbot.com/6b792aec-9004-44dd-998f-5bc793a20f46"/>
      </Head>
      <Header/>
      <WebMonetizationCard/>
      <div id="content">
        <div className="container content__container">
          {props.children}
        </div>
      </div>
      <Player/>
    </div>
);

export default Layout;
