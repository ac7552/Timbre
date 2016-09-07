import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
// import { requestTracks } from '../../actions/track_actions';

  const mapStateToProps = state => ({
    currentUser: state.session.currentUser
  });

  // const mapDispatchToProps = (dispatch, ownProps) => ({
  //     editUser:  (user) => dispatch(editUser(user))
  // });



//when exporting doesn't matter what call it afterwards  only default
  export default connect(mapStateToProps)(Profile);
