import { Comments } from '../../types/types';
import CommentItem from '../comment-item/comment-item';

type CommentProps = {
  comments: Comments;
}


function CommentsList({comments}: CommentProps):JSX.Element {
  return(
    <ul className="reviews__list">
      <h2 className="reviews__title">
          Reviews &middot;{' '}
        <span className="reviews__amount">
          {comments.length}
        </span>
      </h2>
      {comments.map((comment) => (
        <li className="reviews__item" key={comment.id}>
          <CommentItem comment={comment}/>
        </li>
      ))}
    </ul>
  );
}

export default CommentsList;
