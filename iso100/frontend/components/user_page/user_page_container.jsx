import { connect } from 'react-redux';
import UserPage from './user_page';
import { selectUserPhotos, selectAllPhotos, selectAllAlbums, selectUserAlbums } from '../../reducers/selectors';
import { requestPhotos, clearErrors } from '../../actions/photo_actions';
import { requestAlbums, createAlbum } from '../../actions/album_actions';


const mapStateToProps = ({photos, albums, session}, routeProps) => {
  let userId = routeProps.match.params.userId;
  let allPhotos = selectAllPhotos(photos);
  let allAlbums = selectAllAlbums(albums);
  return {
    currentUser: session.currentUser,
    userId: userId,
    userAlbums: selectUserAlbums(allAlbums, userId),
    userPhotos: selectUserPhotos(allPhotos, userId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPhotos: () => dispatch(requestPhotos()),
    requestAlbums: () => dispatch(requestAlbums()),
    createAlbum: (album) => dispatch(createAlbum(album)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
