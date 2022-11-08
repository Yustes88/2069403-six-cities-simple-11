import { Offers } from '../../types/types';
import Card from '../card/card';

type MainPageProps = {
  offers: Offers;
  onListItemEnter: (id: number) => void;
};

function CardsList({ offers, onListItemEnter }: MainPageProps): JSX.Element {

  function handleOnMouseOver(id: string) {
    onListItemEnter(Number(id));
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div key={offer.id} onMouseOver={() => handleOnMouseOver(offer.id)}>
          <Card offer={offer} />
        </div>
      ))}
    </div>
  );
}

export default CardsList;
