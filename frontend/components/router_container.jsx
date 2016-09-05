import React from 'react';
import Router from './router';
import { connect } from 'react-redux';
import { requestTracks } from '../actions/track_actions';

  const mapStateToProps = state => ({
    currentUser: state.session.currentUser
  });

  const mapDispatchToProps = dispatch => ({
    requestTracks: () => dispatch(requestTracks())
  });

//when exporting doesn't matter what call it afterwards  only default
  export default connect(mapStateToProps, mapDispatchToProps)(Router);
