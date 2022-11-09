import { OfferType } from '../../types/types';
import Review from '../review-item/review';

type ReviewProps = {
  offer: OfferType;
}


function ReviewsList({offer}: ReviewProps):JSX.Element {
  return(
    <ul className="reviews__list">
      {offer.reviews.map((review, reviewId) => {
        const keyValue = reviewId;
        return (
          <Review
            avatar={review.avatar}
            userName={review.userName}
            rateReview={review.rateReview}
            reviewText={review.reviewText}
            key={keyValue}
            date={review.date}
          />
        );
      })}
    </ul>
  );
}

export default ReviewsList;
