import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createTrack,requestTracks } from '../../actions/track_actions';


const mapStateToProps = state => ({
  // errors: state.track.errors,

  current_user:  state.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createTrack:  (track) => dispatch(createTrack(track)),
    getAllTracks: () => dispatch(requestTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
