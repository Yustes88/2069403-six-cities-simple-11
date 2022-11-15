import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CardsList from '../../components/cards-list/cards-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { displayOffers, switchCity } from '../../store/action';
import { City, Offers, OfferType } from '../../types/types';

type MainPageProps = {
  totalAmount: number;
  offers: Offers;
  city: City;
  cities: string[];
};

function Main({ totalAmount, offers, city, cities }: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<OfferType | undefined>(
    undefined
  );
  const selectedCity = useAppSelector((state) => state.currentCity);

  const dispatch = useAppDispatch();

  const onListItemEnter = (id: number) => {
    const currentPoint = offers.find((offer) => Number(offer.id) === id);

    setSelectedOffer(currentPoint);
  };
  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities = {cities} selectedCity = {selectedCity} onCityChange={(cityTitle) => {
          dispatch(switchCity(cityTitle));
          dispatch(displayOffers(cityTitle));
        }}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {totalAmount} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CardsList offers={offers} onListItemEnter={onListItemEnter} cardType = {'cities'}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={offers} selectedOffer={selectedOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
