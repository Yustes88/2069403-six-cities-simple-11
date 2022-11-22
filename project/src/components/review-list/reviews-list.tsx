import { Reviews } from '../../types/types';
import Review from '../review-item/review';

type ReviewProps = {
  reviews: Reviews;
}


function ReviewsList({reviews}: ReviewProps):JSX.Element {
  return(
    <ul className="reviews__list">
      <h2 className="reviews__title">
          Reviews &middot;{' '}
        <span className="reviews__amount">
          {reviews.length}
        </span>
      </h2>
      {reviews.map((review) => (
        <li className="reviews__item" key={review.id}>
          <Review review={review}/>
        </li>
      ))}
    </ul>
  );
}

export default ReviewsList;
