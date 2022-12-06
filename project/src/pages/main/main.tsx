import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CardsList from '../../components/cards-list/cards-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import Map from '../../components/map/map';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { store } from '../../store';
import { switchCity } from '../../store/client/action';
import { setOffers } from '../../store/offers/action';
import { fetchOffersAction } from '../../store/offers/api-actions';
import { getSortedOffers } from '../../store/selectors';
import { City, OfferType } from '../../types/types';
import MainEmpty from '../main-empty/main-empty';

type MainPageProps = {
  cities: City[];
  authorizationStatus: AuthorizationStatus;
};

function Main({ cities, authorizationStatus }: MainPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer,] = useState<OfferType | undefined>(
    undefined
  );
  const offers = useAppSelector((state) => state.offers);
  const sortingName = useAppSelector((state) => state.clientReducer.currentSorting);
  const selectedCity = useAppSelector((state) => state.clientReducer.currentCity);
  const sortedOffers = useAppSelector(getSortedOffers);
  const isLoading = useAppSelector((state) => state.clientReducer.isLoading);

  const onListItemEnter = (id: number) => {
    const currentPoint = Object.values(offers).find((offer) => offer.id === id);

    setSelectedOffer(currentPoint);
  };

  const dispatch = useAppDispatch();

  const onCityChange = useCallback((cityTitle: City) => {
    dispatch(switchCity(cityTitle));
  }, [dispatch]);

  useEffect(() => {
    store.dispatch(setOffers(offers));
  }, [offers]);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (isLoading) ? <LoadingSpinner/> :
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <Header authorizationStatus={authorizationStatus}/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities = {cities} selectedCity = {selectedCity} onCityChange={onCityChange}/>
        <div className="cities">
          {sortedOffers.length !== 0 ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {sortedOffers.length} places to stay in {selectedCity.name}
                </b>
                <SortingOptions sortingName = {sortingName}/>
                <div className="cities__places-list places__list tabs__content">
                  <CardsList offers={sortedOffers} onListItemEnter={onListItemEnter} cardType = {'cities'}/>
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={selectedCity} offers={Object.values(offers)} selectedOffer={selectedOffer} />
                </section>
              </div>
            </div>
          ) : (
            <MainEmpty/>
          )}
        </div>
      </main>
    </>;
}

export default Main;
