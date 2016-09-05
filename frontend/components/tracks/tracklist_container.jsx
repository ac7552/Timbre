import React from 'react';
import TrackList from './tracklist';
import { connect } from 'react-redux';
import { requestTracks } from '../../actions/track_actions';

  const mapStateToProps = state => ({
    tracks: state.tracks
  });

  const mapDispatchToProps = dispatch => ({
    requestTracks: () => dispatch(requestTracks())
  });

//when exporting doesn't matter what call it afterwards  only default
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackList);
