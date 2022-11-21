import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CardsList from '../../components/cards-list/cards-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { switchCity} from '../../store/action';
import { getFilteredOffers, getSortedOffers } from '../../store/selectors';
import { City, Offers, OfferType } from '../../types/types';

type MainPageProps = {
  offers: Offers;
  cities: City[];
};

function Main({offers, cities }: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<OfferType | undefined>(
    undefined
  );
  const sortingName = useAppSelector((state) => state.currentSorting);
  const selectedCity = useAppSelector((state) => state.currentCity);
  const filteredOffers = useAppSelector(getFilteredOffers);
  const sortedOffers = useAppSelector(getSortedOffers);

  const onListItemEnter = (id: number) => {
    const currentPoint = offers.find((offer) => offer.id === id);

    setSelectedOffer(currentPoint);
  };

  const dispatch = useAppDispatch();

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
        }}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredOffers.length} places to stay in {selectedCity.name}
              </b>
              <SortingOptions sortingName = {sortingName}/>
              <div className="cities__places-list places__list tabs__content">
                <CardsList offers={sortedOffers} onListItemEnter={onListItemEnter} cardType = {'cities'}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={selectedCity} offers={offers} selectedOffer={selectedOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
