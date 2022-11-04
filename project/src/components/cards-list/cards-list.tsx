import { useState } from 'react';
import { Offers } from '../../types/offer-type-full';
import Card from '../card/card';

type MainPageProps = {
  offers: Offers;
}

function CardsList({offers}: MainPageProps):JSX.Element {
  const [, setActive] = useState(0);

  function handleOnMouseEnter(id: string) {
    setActive(Number(id));
  }


  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div key = {offer.id} onMouseEnter = {() => handleOnMouseEnter}>
          <Card offer={offer}/>
        </div>
      ))}
    </div>
  );
}

export default CardsList;
