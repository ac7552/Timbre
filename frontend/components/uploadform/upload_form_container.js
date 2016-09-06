import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createTrack } from '../../actions/track_actions';


const mapStateToProps = state => ({
  errors: state.track.errors,
  user_id: state.currentUser.id ,
  username:  state.currentUser.username
});

const mapDispatchToProps = (dispatch, ownProps) => {
    createTrack:  (track) => dispatch(createTrack(track))
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
