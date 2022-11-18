import { OfferType, Reviews } from '../../types/types';
import Review from '../review-item/review';

type ReviewProps = {
  offer: OfferType;
  reviews: Reviews;
}


function ReviewsList({offer, reviews}: ReviewProps):JSX.Element {
  const filteredReviewsById = reviews.filter((review) => review.id === offer.id);
  return(
    <ul className="reviews__list">
      <h2 className="reviews__title">
          Reviews &middot;{' '}
        <span className="reviews__amount">
          {filteredReviewsById.length}
        </span>
      </h2>
      {filteredReviewsById.map((review) => (
        <li className="reviews__item" key={review.id}>
          <Review review={review}/>
        </li>
      ))}
    </ul>
  );
}

export default ReviewsList;
