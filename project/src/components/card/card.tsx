import { Link } from 'react-router-dom';
import { OfferType } from '../../types/types';

type CardProps = {
  offer: OfferType;
  type: 'nearby' | 'cities';
};

function Card({ offer, type }: CardProps): JSX.Element {
  const { id, pricePerNight, isPremium, rate, propertyName, propertyType, pictures } =
    offer;
  return (
    <article className={`${type === 'cities' ? 'cities' : 'near-places'}__card place-card`} key={id}>
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}

      <div className={`${type === 'cities' ? 'cities' : 'near-places'}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={pictures[0]}
            width="260"
            height="200"
            alt="Place"
          />
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
          {propertyName}
        </h2>
        <p className="place-card__type">{propertyType}</p>
      </div>
    </article>
  );
}

export default Card;
