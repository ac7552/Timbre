import { CommentConstants,requestSongComments, recieveSongComment, recieveSongComments,createComment } from '../actions/comment_actions';
import { makeComment, fetchComments } from '../util/comments_api_util';
import React from 'react';


export default ({getState, dispatch}) => next => action => {
  const commentsSuccess = data => dispatch(recieveSongComments(data));
  const commentSuccess = data => dispatch(recieveSongComment(data));
  switch(action.type){
    case CommentConstants.REQUEST_SONG_COMMENTS:
      fetchComments(action.trackID, commentsSuccess);
      break;
    case CommentConstants.CREATE_COMMENT:
      makeComment(action.comment,commentSuccess);
      break;
    default:
      next(action);
  }

};
