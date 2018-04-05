import { RECEIVE_TAG,
  RECEIVE_TAGS, REMOVE_TAG,
  CLEAR_ERRORS, RECEIVE_ERRORS} from '../actions/tag_actions';
import merge from 'lodash/merge';


const initialTag = {};

const TagReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAGS:
      return merge({}, action.tags);
    case RECEIVE_TAG:
      return merge({}, state, {[action.tag]: action.tag});
    case REMOVE_TAG:
      let dup = merge({}, state);
      delete dup[action.tag];
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

export default TagReducer;
