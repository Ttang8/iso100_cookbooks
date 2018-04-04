import * as APIUtil from '../util/tag_api_util';
import { requestPhotos } from './photo_actions';

export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const REMOVE_TAG = "REMOVE_TAG";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_TAGGING = "RECEIVE_TAGGING";

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTagging = tagging => ({
  type: RECEIVE_TAGGING,
  tagging
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const createTag = tag => dispatch => (
  APIUtil.createTag(tag).then(tag => (
    dispatch(receiveTag(tag))
  ),errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const createTagging = tagging => dispatch => (
  APIUtil.createTagging(tagging).then(tagging => (
    dispatch(receiveTagging(tagging))
  ),errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const deleteTagging = tagging => dispatch => (
  APIUtil.destroyTagging(tagging).then(tagging => dispatch(removeTag(tagging)))
);

export const requestTag = tagId => dispatch => (
  APIUtil.requestTag(tagId).then(tag => dispatch(receiveTag(tag)))
);

export const requestTags = () => (dispatch) => (
  APIUtil.requestTags().then(tags => dispatch(receiveTags(tags)))
);

export const deleteTag = tag => dispatch => (
  APIUtil.destroyTag(tag).then(tag => dispatch(removeTag(tag)))
);

export const updateTag = tag => dispatch => (
  APIUtil.updateTag(tag).then(tag => (
    dispatch(receiveTag(tag))
  ),errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);
