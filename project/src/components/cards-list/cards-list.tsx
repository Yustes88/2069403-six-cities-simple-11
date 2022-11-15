import { Offers } from '../../types/types';
import Card from '../card/card';

type MainPageProps = {
  offers: Offers;
  onListItemEnter: (id: number) => void;
  cardType: 'nearby' | 'cities';
};

function CardsList({ offers, cardType, onListItemEnter }: MainPageProps): JSX.Element {

  function handleOnMouseOver(id: number) {
    onListItemEnter(id);
  }

  return (
    <>
      {offers.map((offer) => (
        <div key={offer.id} onMouseOver={() => handleOnMouseOver(offer.id)}>
          <Card offer={offer} cardType={cardType}/>
        </div>
      ))}
    </>
  );
}

export default CardsList;
