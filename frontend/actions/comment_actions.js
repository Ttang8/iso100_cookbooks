import * as APIUtil from '../util/comment_api_util';
import { requestPhotos } from './photo_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(comment => (
    dispatch(receiveComment(comment))
  ),errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const requestComment = comment => dispatch => (
  APIUtil.requestComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const requestComments = () => (dispatch) => (
  APIUtil.requestComments().then(comments => dispatch(receiveComments(comments)))
);

export const deleteComment = comment => dispatch => (
  APIUtil.destroyComment(comment).then(comment => dispatch(removeComment(comment)))
);

export const updateComment = comment => dispatch => (
  APIUtil.updateComment(comment).then(comment => (
    dispatch(receiveComment(comment))
  ),errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);
