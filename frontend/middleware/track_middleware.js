import {TrackConstants,
        requestTrack,
        requestTracks,
        recieveTrack,
        recieveTracks,
        editTrack,
        recieveEdit,
        removeTrack,
        removedTrack } from '../actions/track_actions';

import { deleteTrack,updateTrack, fetchTrack, fetchTracks, createTrack} from '../util/tracks_api_util';


import React from 'react';

export default ({getState, dispatch}) => next => action => {

  const tracksSuccess = data => dispatch(recieveTracks(data));
  const trackSuccess = data => dispatch(recieveTrack(data));
  const editSuccess  = data => dispatch(recieveEdit(data))
  const trackRemoved = data => dispatch(removedTrack(data));
  // const trackErrored = data => dispatch(trackError(data.responseJSON));
  switch(action.type){

    case TrackConstants.REQUEST_TRACK:
      fetchTrack(trackSuccess);
      break;
    case TrackConstants.CREATE_TRACK:
      createTrack(action.track,trackSuccess);
      break;
    case TrackConstants.EDIT_TRACK:
      updateTrack(action.track,editSuccess);
      break;
    case TrackConstants.REQUEST_TRACKS:
        fetchTracks(tracksSuccess);
        break;
    case TrackConstants.DELETE_TRACK:
        deleteTrack(action.track, trackRemoved);
        break;
    default:
      next(action);
  }

};
