import { memo } from 'react';
import { City } from '../../types/types';

type CitiesListProps = {
  cities: City[];
  selectedCity: City;
  onCityChange: (city: City) => void;
};

function CitiesList({cities, selectedCity, onCityChange}: CitiesListProps):JSX.Element {
  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const isSelected = (city.name === selectedCity.name);
            return(
              <li className="locations__item" key = {city.name}>
                <a className={`
                    locations__item-link
                    tabs__item
                    ${ isSelected ? 'tabs__item--active' : ''}
                  `} href={`#${city.name}`}
                onClick={(evt) => {
                  evt.preventDefault();
                  onCityChange(city);
                }}
                >
                  <span>{city.name}</span>
                </a>
              </li>
            );

          })}
        </ul>
      </section>
    </div>
  );
}

export default memo(CitiesList);
