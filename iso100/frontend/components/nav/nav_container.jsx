import { connect } from 'react-redux';
import Nav from './nav';
import { logout, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({session}, routeProps) => ({
  currentUser: session.currentUser,
  routeProps: routeProps
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
