import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
    case UserConstants.RECIEVE_USER:
          return action.user;
    default:
      return state;
  }
};

export default UserReducer;
