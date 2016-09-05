import { receiveCurrentUser,
         receiveErrors,
         SessionConstants
       } from '../actions/session_actions';
import { hashHistory } from 'react-router';
import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => {
    hashHistory.push("/home")
    dispatch(receiveCurrentUser(user));
  };
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case SessionConstants.LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => {
        hashHistory.push("/login")
        next(action)
      });
      break;
    case SessionConstants.SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
