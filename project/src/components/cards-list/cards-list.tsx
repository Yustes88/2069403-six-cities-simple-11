import { Offers } from '../../types/types';
import Card from '../card/card';

type MainPageProps = {
  offers: Offers;
  onListItemEnter: (id: number) => void;
  type: 'nearby' | 'cities';
};

function CardsList({ offers, type, onListItemEnter }: MainPageProps): JSX.Element {

  function handleOnMouseOver(id: string) {
    onListItemEnter(Number(id));
  }

  return (
    <>
      {offers.map((offer) => (
        <div key={offer.id} onMouseOver={() => handleOnMouseOver(offer.id)}>
          <Card offer={offer} type={type}/>
        </div>
      ))}
    </>
  );
}

export default CardsList;
