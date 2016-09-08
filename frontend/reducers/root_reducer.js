import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import CurrentTrack from './current_track_reducer';
import TracksReducer from './tracks_reducer';
import CommentsReducer from './comments_reducer';

export default combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  current_track: CurrentTrack,
  comments: CommentsReducer
});
