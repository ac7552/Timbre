import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';

  const mapStateToProps = state => ({
    currentUser: state.session.currentUser
  });

  const mapDispatchToProps = (dispatch, ownProps) => ({
      user_edit:  (user) => dispatch(editUser(user))
  });



//when exporting doesn't matter what call it afterwards  only default
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
