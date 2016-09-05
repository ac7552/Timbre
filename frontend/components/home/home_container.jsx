import React from 'react';
import Home from './home';
import { connect } from 'react-redux';
// import { requestTracks } from '../../actions/track_actions';

const mapStateToProps = state => ({
    currentUser: state.session
});



//when exporting doesn't matter what call it afterwards  only default
  export default connect(mapStateToProps)(Home);
