import React from 'react';
import TrackListItem from './tracklist_item';
import {recieveCurrentTrack} from '../../actions/current_track_actions';
import { connect } from 'react-redux';

  const mapStateToProps = state => ({
    all_tracks: state.tracks,
    current_track: state.current_track
  });

  const mapDispatchToProps = (dispatch) => ({
      update_current: (current_track) => dispatch(recieveCurrentTrack(current_track))
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackListItem);
