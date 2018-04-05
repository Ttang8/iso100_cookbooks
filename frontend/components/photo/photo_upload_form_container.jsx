import { connect } from 'react-redux';
import PhotoUploadForm from './photo_upload_form';
import { createPhoto, clearErrors } from '../../actions/photo_actions';

const mapStateToProps = ({ session, photos, errors}) => ({
  session,
  photos,
  errors
});

const mapDispatchToProps = (dispatch, {location}) => ({
  createPhoto: photo => dispatch(createPhoto(photo)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUploadForm);
