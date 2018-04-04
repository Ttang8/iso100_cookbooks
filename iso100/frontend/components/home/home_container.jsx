import { connect } from 'react-redux';
import Home from './home';
import { selectAllPhotos } from '../../reducers/selectors';
import { requestPhotos } from '../../actions/photo_actions';

const mapStateToProps = ({photos, session}) => {
  return {
    user: session.currentUser,
    loggedIn: Boolean(session.currentUser),
    photos: selectAllPhotos(photos)
  };
};

const mapDispatchToProps = dispatch => ({
  requestPhotos: () => dispatch(requestPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
