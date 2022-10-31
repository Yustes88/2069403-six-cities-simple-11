import { Link } from 'react-router-dom';
import { OfferTypeFull } from '../../types/offer-type-full';

type CardProps = {
  offer: OfferTypeFull;
  onMouseEnter: (cardId:number)=> void;
}

function Card({offer, onMouseEnter}:CardProps):JSX.Element {
  const {id, pricePerNight, isPremium, rate, propertyName, propertyType} = offer;
  return (
    <article className="cities__card place-card" key={id} onMouseEnter={() => onMouseEnter(offer.id)}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer:${id}`}>
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{pricePerNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rate * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer:${id}`}>{propertyName}</Link>
        </h2>
        <p className="place-card__type">{propertyType}</p>
      </div>
    </article>
  );
}


export default Card;
