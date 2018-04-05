import { connect } from 'react-redux';
import TagForm from './tag_form';
import {createTag, deleteTag, createTagging, deleteTagging, requestTag, clearErrors} from '../../actions/tag_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({errors, session}) => ({
  errors,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createTag: (tag) => dispatch(createTag(tag)),
  requestTag: (tag) => dispatch(requestTag(tag)),
  deleteTag: (tag) => dispatch(deleteTag(tag)),
  clearErrors: () => dispatch(clearErrors()),
  createTagging: (tagging) => dispatch(createTagging(tagging)),
  deleteTagging: (tagging) => dispatch(deleteTagging(tagging))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
