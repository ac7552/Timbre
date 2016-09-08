import { applyMiddleware } from 'redux';
import CommentMiddleware from './comment_middleware';
import SessionMiddleware from './session_middleware';
import TrackMiddleware from './track_middleware';
const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TrackMiddleware,
  CommentMiddleware
);

export default RootMiddleware;
