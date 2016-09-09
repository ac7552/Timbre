import { UserConstants, editUser, recieveUser} from '../actions/user_actions';
import { edit } from '../util/user_api_util';
import React from 'react';


export default ({getState, dispatch}) => next => action => {
  const userSuccess = data => dispatch(recieveUser(data));
  switch(action.type){
    case UserConstants.EDIT_USER:
      edit(action.user, userSuccess);
      break;
    default:
      next(action);
  }

};
