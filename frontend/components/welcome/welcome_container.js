import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { restart } from '../../actions/current_track_actions';
import Welcome from './welcome';



const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  restart: () => dispatch(restart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
