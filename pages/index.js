import Layout from '../components/MyLayout';
import MenuCard from '../components/Cards/MenuCard';
import SocialCard from '../components/Cards/SocialCard';
import MobileAppCard from '../components/Cards/MobileAppCard';
import AOWCard from '../components/Cards/AOWCard';
import NewArtistCard from '../components/Cards/NewArtistCard';
import EventsCard from '../components/Cards/EventsCard';
import LocationCard from '../components/Cards/LocationCard';
import Track from '../components/Track';

export default function Home() {
  return (
      <Layout>
        <div class="content__container-left">
          <MenuCard/>
          <SocialCard/>
          <MobileAppCard/>
        </div>
        <div class="content__container-middle">
          <div class="card">
            <div class="card__title">
              <p>Top Tips</p>
              <div class="card__filter">
                <a href="#" class="card__filter-link active">Day |</a>
                <a href="#" class="card__filter-link">Week |</a>
                <a href="#" class="card__filter-link">Month </a>
              </div>
            </div>
            <div class="card__content">
              <div class="top-tips">
                <div class="track-container">
                  <Track image="/img/tracks/tracks-1.png" title="Track's title" artist="Artist's name" genre="Electronic, Alternative" likes={1200} tips={3400} />
                  <Track image="/img/tracks/tracks-2.png" title="Track's title" artist="Artist's name" genre="Electronic, Alternative" likes={1234} tips={2345} />
                  <Track image="/img/tracks/tracks-3.png" title="Track's title" artist="Artist's name" genre="Electronic, Alternative" likes={3456} tips={4567} />
                  <div class="card__more">
                    <a href="#" class="card__more-link">See more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__title">
              <p>Top Played</p>
              <div class="card__filter">
                <a href="#" class="card__filter-link">Day |</a>
                <a href="#" class="card__filter-link active">Week |</a>
                <a href="#" class="card__filter-link">Month </a>
              </div>
            </div>
            <div class="card__content">
              <div class="top-tips">
                <div class="track-container">
                  <Track image="/img/tracks/tracks-1.png" title="Track's title" artist="Artist's name" genre="Electronic, Alternative" likes={1200} tips={3400} />
                  <Track image="/img/tracks/tracks-2.png" title="Track's title" artist="Artist's name" genre="Electronic, Alternative" likes={1234} tips={2345} />
                  <Track image="/img/tracks/tracks-3.png" title="Track's title" artist="Artist's name" genre="Electronic, Alternative" likes={3456} tips={4567} />
                  <div class="card__more">
                    <a href="#" class="card__more-link">See more top tips track</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__title">
              <p>New Releases</p>
            </div>
            <div class="card__content">
              <div class="top-tips">
                <div class="track-container">
                  <Track image="/img/tracks/tracks-1.png" title="Track's title" artist="Artist's name" genre="Electronic, Alternative" likes={1200} tips={3400} />
                  <Track image="/img/tracks/tracks-2.png" title="Track's title" artist="Artist's name" genre="Electronic, Alternative" likes={1234} tips={2345} />
                  <Track image="/img/tracks/tracks-3.png" title="Track's title" artist="Artist's name" genre="Electronic, Alternative" likes={3456} tips={4567} />
                  <div class="card__more">
                    <a href="#" class="card__more-link">See more top new releases</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content__container-right">
          <AOWCard/>
          <NewArtistCard/>
          <EventsCard/>
          <LocationCard/>
        </div>
      </Layout>
  );
}