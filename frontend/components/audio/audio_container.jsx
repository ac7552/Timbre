import React from 'react';
import Audio from './audio';
import { connect } from 'react-redux';
// import { requestTracks } from '../../actions/track_actions';

  const mapStateToProps = state => ({
    alltracks: toArray(state.tracks),
    current_track: state.current_track
    //  toArray(state.current_tracks)
  });

  // const mapDispatchToProps = (dispatch) => ({
  //     update_current: (current_tracks) => dispatch(recieveTracks(current_tracks))
  // });

  const toArray = obj => Object.keys(obj).map(id => obj[id])

  export default connect(
    mapStateToProps
    // mapDispatchToProps
  )(Audio);
