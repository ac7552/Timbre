import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case UserConstants.RECIEVE_USER:
      newState = {[action.user]: action.user};
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default UserReducer;
