import { Link } from 'react-router-dom';
import { OfferType } from '../../types/types';

type CardProps = {
  offer: OfferType;
  cardType: 'nearby' | 'cities';
};

function Card({ offer, cardType }: CardProps): JSX.Element {
  const { id, price, isPremium, rating, title, type, previewImage } =
    offer;
  return (
    <article className={`${cardType === 'cities' ? 'cities' : 'near-places'}__card place-card`} key={id}>
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}

      <div className={`${type === 'cities' ? 'cities' : 'near-places'}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          {title}
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
