type CitiesListProps = {
  cities: string[];
  selectedCity: string;
  onCityChange: (city: string) => void;
};

function CitiesList({cities, selectedCity, onCityChange}: CitiesListProps):JSX.Element {
  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const isSelected = (city === selectedCity);
            return(
              <li className="locations__item" key = {city}>
                <a className={`
                    locations__item-link
                    tabs__item
                    ${ isSelected ? 'tabs__item--active' : ''}
                  `} href={`#${city}`}
                onClick={(evt) => {
                  evt.preventDefault();
                  onCityChange(city);
                }}
                >
                  <span>{city}</span>
                </a>
              </li>
            );

          })}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
