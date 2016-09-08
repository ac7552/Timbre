import React from 'react';
import {Link} from 'react-router';

const sessionLinks = () => (
  <nav className="nav-bar">
    <ul>
      <li><Link to="/" activeClassName="timbre">Timbre</Link></li>
      <li> <Link className="login-button" to="/login" activeClassName="current">Login</Link></li>
      <li> <Link className="login-button" to="/signup" activeClassName="current">Sign Up</Link></li>
    </ul>
    </nav>
);
//
const sessionDelete = (logout) => (

  <nav className="nav-bar">
    <ul>
      <li> <button className="logout-button" onClick={logout}>Log Out</button></li>
      <li> <Link to='upload' activeClassName="Upload">Upload</Link></li>
      <li> <Link to='profile' activeClassName="Profile">Profile</Link></li>
      <li> <Link to='home' activeClassName="Home">Home</Link></li>
    </ul>
  </nav>

  );


function Welcome({currentUser, logout}){
  if(currentUser){
    return sessionDelete(logout);
  }else{
    return sessionLinks();
  }


}

export default Welcome;
