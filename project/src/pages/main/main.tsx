import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CardsList from '../../components/cards-list/cards-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortName, switchCity} from '../../store/action';
import { getFilteredOffers } from '../../store/selectors';
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

  const dispatch = useAppDispatch();

  const onListItemEnter = (id: number) => {
    const currentPoint = offers.find((offer) => Number(offer.id) === id);

    setSelectedOffer(currentPoint);
  };

  const sortedOffers = (sortTitle: string) => {
    switch (sortTitle) {
      case 'Price: low to high':
        return filteredOffers.sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return filteredOffers.sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return filteredOffers.sort((a, b) => b.rating - a.rating);
      default:
        return filteredOffers;
    }
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
        }}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredOffers.length} places to stay in {selectedCity.name}
              </b>
              <SortingOptions sortingName = {sortingName} onSortingChange = {(sortingTitle) => {
                dispatch(getSortName(sortingTitle));
              }}
              />
              <div className="cities__places-list places__list tabs__content">
                <CardsList offers={sortedOffers(sortingName)} onListItemEnter={onListItemEnter} cardType = {'cities'}/>
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
