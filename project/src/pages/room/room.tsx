import { useParams } from 'react-router-dom';
import CardsList from '../../components/cards-list/cards-list';
import CommentForm from '../../components/comment-form/comment-form';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Gallery from '../../components/offer/gallery';
import HouseItems from '../../components/offer/house-items';
import PropertyDescription from '../../components/offer/property-description';
import ReviewsList from '../../components/review-list/reviews-list';
import { City, Offers } from '../../types/types';
import NotFound from '../404/not-found';

type RoomProps = {
  offers: Offers;
  city: City;
};

function Room({ offers, city }: RoomProps): JSX.Element {

  const highlightChosenRoom = (id: number) =>
    offers.find((offer) => Number(offer.id) === id);

  const onListItemEnter = (id: number) => offers.find((offer) => Number(offer.id) === id);


  const { id } = useParams();
  const offer = offers.find((item) => item.id === id);
  if (offer) {
    return (
      <>
        <Header />

        <main className="page__main page__main--property" key={offer.id}>
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <Gallery pictures={offer.pictures} />
              </div>
            </div>
            <div className="property__container container" key={offer.id}>
              <div className="property__wrapper">
                {offer.isPremium ? (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                ) : (
                  ''
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{offer.propertyName}</h1>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {offer.rate}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.propertyType}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedroomNumber} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.maxGuests} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">
                    &euro;{offer.pricePerNight}
                  </b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    <HouseItems houseItems={offer.houseItems} />
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={offer.host.avatar}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {offer.host.hostName}
                    </span>
                    <span className="property__user-status">
                      {offer.host.isPro ? 'Pro' : ''}
                    </span>
                  </div>
                  <div className="property__description">
                    <PropertyDescription
                      propertyDescription={offer.propertyDescription}
                    />
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;{' '}
                    <span className="reviews__amount">
                      {offer.reviews.length}
                    </span>
                  </h2>
                  <ReviewsList offer={offer} />
                  <CommentForm />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                city={city}
                offers={offers}
                selectedOffer={highlightChosenRoom(Number(offer.id))}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <CardsList offers={offers} onListItemEnter={onListItemEnter} type = {'nearby'} />
              </div>
            </section>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <main className="page__main page__main--property">
        <section className="property">
          <NotFound />
        </section>
      </main>
    );
  }
}

export default Room;
