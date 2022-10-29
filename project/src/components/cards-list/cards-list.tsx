import { Offers } from '../../types/offer-type-full';
import Card from '../card/card';

type MainPageProps = {
  offers: Offers;
}

function CardsList({offers}: MainPageProps):JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, itemId) => {
        const keyValue = itemId;
        return(
          <Card offer={offer} key = {keyValue}/>
        );
      })}
    </div>
  );
}

export default CardsList;
