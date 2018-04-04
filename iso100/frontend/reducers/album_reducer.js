import { RECEIVE_ALBUM,
  RECEIVE_ALBUMS, REMOVE_ALBUM,
  CLEAR_ERRORS, RECEIVE_ERRORS} from '../actions/album_actions';
import merge from 'lodash/merge';


const initialAlbum = {};

const AlbumReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALBUMS:
      return merge({}, action.albums);
    case RECEIVE_ALBUM:
      return merge({}, state, {[action.album.id]: action.album});
    case REMOVE_ALBUM:
      let dup = merge({}, state);
      delete dup[action.album.id];
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

export default AlbumReducer;
