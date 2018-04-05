import { RECEIVE_COMMENT,
  RECEIVE_COMMENTS, REMOVE_COMMENT,
  CLEAR_ERRORS, RECEIVE_ERRORS} from '../actions/comment_actions';
import merge from 'lodash/merge';


const initialComment = {};

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      let dup = merge({}, state);
      delete dup[action.comment];
      return merge({}, dup);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, { errors });
    case CLEAR_ERRORS:
      return Object.assign({}, state, { errors: []} );
  default:
    return state;
  }
};

export default CommentReducer;
