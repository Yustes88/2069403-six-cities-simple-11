import { ChangeEvent, FormEvent, useState } from 'react';
import { ReviewLength } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCommentAction } from '../../store/offer/api-actions';
import './comment-form.css';


type ReviewListPropsType = {
  offerId: number;
}

function CommentForm({offerId}: ReviewListPropsType):JSX.Element {
  const [review, setReview] = useState<string>('');
  const [rate, setRate] = useState<number | null>(null);

  const dispatch = useAppDispatch();

  const isSending = useAppSelector((state) => state.offerReducer.sendingStatus);
  const isShort = (review.length < ReviewLength.MinLength);
  const isLong = (review.length > ReviewLength.MaxLength);
  const isEmpty = rate === null;
  const isFormInvalid = isShort || isLong || isEmpty;

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);

    setRate(value);
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const value = evt.target.value;
    setReview(value);
  };


  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const id = offerId;
    const comment = review;
    const rating = rate;
    dispatch(postCommentAction({id, comment, rating}));
  };


  return(
    <form className={isSending === true ? 'reviews__form form reviews__form-loading' : 'reviews__form form'} action="#" method="post" onSubmit={handleFormSubmit}>
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
                    Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange = {handleRatingChange}
          required
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange = {handleRatingChange}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange = {handleRatingChange}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange = {handleRatingChange}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onChange = {handleRatingChange}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={ReviewLength.MaxLength}
        onChange = {handleTextareaChange}
        value = {review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
                      your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled = {isFormInvalid || isSending === true }
        >
                      Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
