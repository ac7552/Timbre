import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { editUser,requestUser } from '../../actions/user_actions';

  const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    user: state.user
    });

  const mapDispatchToProps = (dispatch, ownProps) => ({
      user_edit:  (user) => dispatch(editUser(user)),
      get_user:    (user) => dispatch(requestUser(user))
      // user_get: (user) => dispatch(recieveUser(user))
  });



//when exporting doesn't matter what call it afterwards  only default
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
