import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';

function MainEmpty() {
  const selectedCity = useAppSelector((state) => state.clientReducer.currentCity);
  return(
    <>
      <Helmet>
        <title>Six cities</title>
      </Helmet>
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {selectedCity.name}</p>
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <img src="../img/map@2x.jpg" alt="Static map" />
          </section>
        </div>
      </div>
    </>
  );
}


export default MainEmpty;
