import React from 'react';
import TrackListItem from './tracklist_item';
import {recieveCurrentTrack} from '../../actions/current_track_actions';
import {requestSongComments} from '../../actions/comment_actions';
import {removeTrack} from '../../actions/track_actions';
import { connect } from 'react-redux';



  const mapStateToProps = state => ({
    all_tracks: state.tracks,
    current_track: state.current_track,
    current_user: state.session.currentUser
  });

  const mapDispatchToProps = (dispatch) => ({
      update_current: (current_track) => dispatch(recieveCurrentTrack(current_track)),
      getSongComments: (song) => dispatch(requestSongComments(song)),
      delete: (song) => dispatch(removeTrack(song))
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TrackListItem);
