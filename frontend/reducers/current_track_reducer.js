import {CurrentTrackConstants} from '../actions/current_track_actions';
import merge from 'lodash/merge';

const CurrentTracks = (state = false, action) => {

  let newState
  switch(action.type){
    case CurrentTrackConstants.RECIEVE_TRACK:
        newState =  action.track.id;
        return newState
    case CurrentTrackConstants.RESTART:
          return false
    default:
      return state;
  }
};

export default CurrentTracks;
