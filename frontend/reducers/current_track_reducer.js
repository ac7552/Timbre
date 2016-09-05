import {CurrentTrackConstants} from '../actions/current_track_actions';
import merge from 'lodash/merge';

const CurrentTracks = (state = false, action) => {

  let newState
  switch(action.type){
    case CurrentTrackConstants.RECIEVE_TRACK:
        return action.current_track.id;
    default:
      return state;
  }
};

export default CurrentTracks;
