import Layout from '../components/MyLayout';
import MenuCard from '../components/Cards/MenuCard';
import SocialCard from '../components/Cards/SocialCard';
import MobileAppCard from '../components/Cards/MobileAppCard';
import AOWCard from '../components/Cards/AOWCard';
import NewArtistCard from '../components/Cards/NewArtistCard';
import EventsCard from '../components/Cards/EventsCard';
import LocationCard from '../components/Cards/LocationCard';

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
                  <div class="track">
                    <div class="track__left">
                      <div class="track__pic-container">
                        <img src="/img/tracks/tracks-1.png" class="track__pic" alt=""/>
                        <div class="track__pic-overlay">
                          <div class="track__play"><img src="/img/icons/play.png" alt=""/></div>
                        </div>
                      </div>
                      <div class="track__attr">
                        <p class="track__title">Track's title</p>
                        <p class="track__artist">Artist's name</p>
                        <p class="track__genre">Electronic, Alternative</p>
                      </div>
                    </div>
                    <div class="track__right">
                      <span class="track__dot"><img src="/img/icons/icon-dot.png" alt=""/></span>
                      <div class="track__stats">
                        <img src="/img/icons/like.png" class="like" alt=""/><p class="track__like">1200</p>
                        <img src="/img/icons/tip.png" class="tips" alt=""/><p class="track__tips">3400</p>
                      </div>
                    </div>
                  </div>
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
                  <div class="track">
                    <div class="track__left">
                      <div class="track__pic-container">
                        <img src="/img/tracks/tracks-2.png" class="track__pic" alt=""/>
                        <div class="track__pic-overlay">
                          <div class="track__play"><img src="/img/icons/play.png" alt=""/></div>
                        </div>
                      </div>
                      <div class="track__attr">
                        <p class="track__title">Track's title</p>
                        <p class="track__artist">Artist's name</p>
                        <p class="track__genre">Electronic, Alternative</p>
                      </div>
                    </div>
                    <div class="track__right">
                      <span class="track__dot"><img src="/img/icons/icon-dot.png" alt=""/></span>
                      <div class="track__stats">
                        <img src="/img/icons/like.png" class="like" alt=""/><p class="track__like">1200</p>
                        <img src="/img/icons/play-small.png" class="tips" alt=""/><p class="track__play">3400</p>
                      </div>
                    </div>
                  </div>
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
                  <div class="track">
                    <div class="track__left">
                      <div class="track__pic-container">
                        <img src="/img/tracks/tracks-3.png" class="track__pic" alt=""/>
                        <div class="track__pic-overlay">
                          <div class="track__play"><img src="/img/icons/play.png" alt=""/></div>
                        </div>
                      </div>
                      <div class="track__attr">
                        <p class="track__title">Track's title</p>
                        <p class="track__artist">Artist's name</p>
                        <p class="track__genre">Electronic, Alternative</p>
                      </div>
                    </div>
                    <div class="track__right">
                      <span class="track__dot"><img src="/img/icons/icon-dot.png" alt=""/></span>
                      <div class="track__stats">
                        <p>2 hours ago</p>
                      </div>
                    </div>
                  </div>
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