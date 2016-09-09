import { applyMiddleware } from 'redux';
import CommentMiddleware from './comment_middleware';
import SessionMiddleware from './session_middleware';
import TrackMiddleware from './track_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TrackMiddleware,
  CommentMiddleware,
  UserMiddleware
);

export default RootMiddleware;
