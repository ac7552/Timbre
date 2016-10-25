import {TrackConstants} from '../actions/track_actions';
import merge from 'lodash/merge';

const TracksReducer = (state ={}, action) => {

  let newState
  switch(action.type){
    case TrackConstants.RECIEVE_TRACKS:
         newState = {};
        action.tracks.forEach( track => newState[track.id] = track)
        return newState;
    case TrackConstants.RECIEVE_TRACK:
    newState = {[action.track.id]: action.track};
        return merge({}, state, newState);
    case TrackConstants.RECIEVE_EDIT:
        newState = {[action.track.id]: action.track};
        return merge({}, state, newState)
    case TrackConstants.DELETED_TRACK:
            newState = state
            delete newState[action.track.id]
            return merge({}, state, newState)
    default:
      return state;
  }
};

export default TracksReducer;
