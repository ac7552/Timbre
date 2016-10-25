import React from 'react';
import {Link} from 'react-router';
import Audio from '../audio/audio_container';

class Welcome extends React.Component{
  constructor(props){
    super(props)

  }

 sessionLinks(){
  return (
    <div>
  <nav className="nav-bar">
    <ul>
      <li><Link to="/" activeClassName="timbre">Timbre</Link></li>
      <li> <Link className="login-button" to="/login" activeClassName="current">Login</Link></li>
      <li> <Link className="login-button" to="/signup" activeClassName="current">Sign Up</Link></li>
    </ul>
    </nav>
    </div>
);
}

logoutRestart(){
  this.props.logout();
  this.props.restart();
}
//
 sessionDelete () {
  return (
  <div>
  <nav className="nav-bar">
    <ul>
      <li> <button className="logout-button"  onClick={this.logoutRestart.bind(this)}>Log Out</button></li>
      <li> <Link to='upload' activeClassName="Upload">Upload</Link></li>
      <li> <Link to='profile' activeClassName="Profile">Profile</Link></li>
      <li> <Link to='home' activeClassName="Home">Home</Link></li>
    </ul>
  </nav>
  <Audio/>
  </div>
  );
}

userLogin(){
  if(this.props.currentUser){
      return  this.sessionDelete();
  }else{
      return  this.sessionLinks();
  }
}

render(){
  return (
    <div>
      {this.userLogin()}
      </div>

  )
}

}

export default Welcome;
