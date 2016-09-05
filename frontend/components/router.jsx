import {IndexRedirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import React from 'react';
import SessionFormContainer from './sessionform/session_form_container';
import ProfileContainer from './profile/profile_container';
import TrackListContainer from './tracks/tracklist_container';
import HomeContainer from './home/home_container';
import AudioContainer from './audio/audio_container';


class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this.ensureLogout = this.ensureLogout.bind(this);
  }

  ensureLogout(newstate, replace){
    if(this.props.currentUser){
      replace("/");
    }
  }

  ensureLogin(newstate, replace){
    if(!this.props.currentUser){
      replace("login");
    }
  }


render(){
  return(
  <Router history={ hashHistory }>
    <Route path="/" component={ App } onEnter={this.props.requestTracks}>
      <IndexRoute  component={TrackListContainer}/>
      {/* <Route to="audio" component={AudioContainer} onEnter = {this.ensureLogIn} /> */}
      <Route to="tracks" component={TrackListContainer} onEnter = {this.ensureLogIn} />
      <Route path="login" component={SessionFormContainer} onEnter = {this.ensureLogout}/>
      <Route path="signup" component={SessionFormContainer} onEnter = {this.ensureLogout}/>
      <Route path="profile" component={ProfileContainer} onEnter = {this.ensureLogIn}/>
      <Route path="home" component={HomeContainer} onEnter = {this.ensureLogIn}/>

  </Route>
  </Router>
  );
}

}
export default AppRouter;
