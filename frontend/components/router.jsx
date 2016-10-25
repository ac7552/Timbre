import {IndexRedirect, Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import React from 'react';
import UploadFormContainer from './uploadform/upload_form_container';
import SessionFormContainer from './sessionform/session_form_container';
import ProfileContainer from './profile/profile_container';
import TrackListContainer from './tracks/tracklist_container';
import HomeContainer from './home/home_container';
import AudioContainer from './audio/audio_container';
import CommentContainer from './comments/comments_container';
import SplashContainer from '../splash/splash'
import EditContainer from './tracks/edit_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this.ensureLogout = this.ensureLogout.bind(this);
    this.ensureLogIn = this.ensureLogIn.bind(this);

  }

  ensureLogout(newstate, replace){
    if(this.props.currentUser){
      replace("/");
    }
  }

  ensureLogIn(newstate, replace){
    if(!this.props.currentUser){
      replace("/login");
    }
  }

 shouldComponentUpdate(){
   return false ;
 }

render(){
  return(
  <Router history={ hashHistory }>
    <Route path="/" component={ App } onEnter={this.props.requestTracks}>
      <IndexRoute to="/splash" component={SplashContainer}/>
      <Route path="/splash" component={SplashContainer} onEnter = {this.ensureLogIn} />
      <Route path="/login" component={SessionFormContainer} onEnter = {this.ensureLogout}/>
      <Route path="/upload" component={UploadFormContainer} onEnter = {this.ensureLogIn}/>
      <Route path="/signup" component={SessionFormContainer} onEnter = {this.ensureLogout}/>
      <Route path="/profile" component={ProfileContainer} onEnter = {this.ensureLogIn}></Route>
      <Route path="/home" component={HomeContainer} onEnter = {this.ensureLogIn}/>
      <Route path="/tracks/:id/comments" component={CommentContainer} onEnter = {this.ensureLogIn}/>
      <Route path="/tracks/:id/edit" component={EditContainer} onEnter = {this.ensureLogIn}/>
  </Route>
  </Router>
  );
}

}
export default AppRouter;
