import { connect } from 'react-redux';
import SearchTagIndex from './search_tag_index';
import {requestPhotosByTag} from '../../actions/photo_actions';
import {selectAllPhotos, selectAllTags} from '../../reducers/selectors';
import {requestTag} from '../../actions/tag_actions';

const mapStateToProps = ({photos, tag}) => {
  return {
    tag: selectAllTags(tag),
    photos: selectAllPhotos(photos)
  };
};

const mapDispatchToProps = dispatch => ({
  requestPhotosByTag: tagId => dispatch(requestPhotosByTag(tagId)),
  requestTag: tagId => dispatch(requestTag(tagId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTagIndex);
