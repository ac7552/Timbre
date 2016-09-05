import {TrackConstants,
        requestTrack,
        requestTracks,
        recieveTrack,
        recieveTracks} from '../actions/track_actions';

import {fetchTrack, fetchTracks, createTrack} from '../util/tracks_api_util';


import React from 'react';

export default ({getState, dispatch}) => next => action => {
  const tracksSuccess = data => dispatch(recieveTracks(data));
  const trackSuccess = data => dispatch(receiveTrack(data));
  // const trackRemoved = data => dispatch(removeTrack(data));
  // const trackErrored = data => dispatch(trackError(data.responseJSON));
  switch(action.type){

    case TrackConstants.REQUEST_TRACK:
      fetchTrack(tracksSuccess);
      break;
    case TrackConstants.CREATE_TRACK:
      createTrack(action.track,trackSuccess);
      break;
    case TrackConstants.REQUEST_TRACKS:
        fetchTracks(tracksSuccess);
        break;
    default:
      next(action);
  }

};
