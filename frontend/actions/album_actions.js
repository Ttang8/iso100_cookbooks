import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const REMOVE_ALBUM = "REMOVE_ALBUM";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const removeAlbum = album => ({
  type: REMOVE_ALBUM,
  album
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const createAlbum = album => dispatch => (
  APIUtil.createAlbum(album).then(album => (
    dispatch(receiveAlbum(album))
  ),errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const requestAlbum = album => dispatch => (
  APIUtil.requestAlbum(album).then(album => dispatch(receiveAlbum(album)))
);

export const requestAlbums = () => (dispatch) => (
  APIUtil.requestAlbums().then(albums => dispatch(receiveAlbums(albums)))
);

export const deleteAlbum = album => dispatch => (
  APIUtil.destroyAlbum(album).then(album => dispatch(removeAlbum(album)))
);

export const updateAlbum = album => dispatch => (
  APIUtil.updateAlbum(album).then(album => (
    dispatch(receiveAlbum(album))
  ),errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);
