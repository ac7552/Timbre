import { connect } from 'react-redux';
import EditForm from './edit';
import { editTrack,requestTracks } from '../../actions/track_actions';


const mapStateToProps = (state, ownProps) => ({
  // errors: state.track.errors,
  tracks: state.tracks ,
  current_playing: ownProps.params,
  current_user:  state.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    edit: (track) => dispatch(editTrack(track)),
    getTracks: () => dispatch(requestTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);
