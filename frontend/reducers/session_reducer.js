import  {SessionConstants} from '../actions/session_actions';
import merge from 'lodash/merge';


const null_user = ({
  currentUser: null,
  errors: []
});

function SessionReducer(state = null_user, action){
  switch (action.type)  {
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({},null_user,{currentUser});
    case SessionConstants.RECEIVE_ERRORS:
      const error = action.error;
      return merge({},null_user,{error});
    case SessionConstants.LOGOUT:
      return merge({},null_user);
    default:
      return state ;
  }
}

export default SessionReducer;
