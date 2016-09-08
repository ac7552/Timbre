import {CommentConstants} from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentsReducer = (state = [], action) => {
  switch(action.type){
    case CommentConstants.RECIEVE_COMMENTS:
        return action.comments;
    case CommentConstants.RECIEVE_COMMENT:
        debugger;
        return  [...state,action.comment]
    default:
      return state;
  }
};

export default CommentsReducer;
