import { citiesList } from '../../const';

function CitiesList():JSX.Element {
  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList.map((city) => (
            <li className="locations__item" key = {city}>
              <a className="locations__item-link tabs__item" href="#link">
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
