import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { createAlbum, clearErrors } from '../../actions/album_actions';

const mapStateToProps = ({albums, errors}) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createAlbum: album => dispatch(createAlbum(album)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumForm);
