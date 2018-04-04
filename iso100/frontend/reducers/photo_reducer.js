import { RECEIVE_PHOTO,
  RECEIVE_PHOTOS, REMOVE_PHOTO,
  CLEAR_ERRORS, RECEIVE_ERRORS} from '../actions/photo_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';


const initialPhoto = {};

const PhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return Object.assign({}, state, {[action.photo.id]: action.photo});
    case REMOVE_PHOTO:
      let dup = merge({}, state);
      delete dup[action.photo.id];
      return merge({}, dup);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, { errors });
    // case RECEIVE_COMMENT:
    //   let dupstate = merge({}, state);
    //   let photo = dupstate[action.comment.photo_id];
    //   let comments = photo.comments.concat(action.comment);
      // photo.comments = comments;
      // return merge({}, state, {[photo.id]: photo});
    case CLEAR_ERRORS:
      return Object.assign({}, state, { errors: []} );
  default:
    return state;
  }
};

export default PhotoReducer;
