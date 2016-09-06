import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';
import { createTrack } from '../../actions/track_actions';

class UploadForm extends React.Component{
  constructor(props){
      super(props);

  this.state = {
    username: "",
    password: ""
  };
  this.handleSubmit = this.handleSubmit.bind(this);
}


handleSubmit (e) {
   e.preventDefault();
   this.props.createTrack(this.state);
 }


  upload(e) {
     e.preventDefault();
     cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
       if(!error){
         this.props.postImage(results[0]);
       }
     }.bind(this));
   }

render(){
  return (
    <div className="login-form-container-outter-box">
      <div className="login-form-container-inner-box">
      <form onSubmit={this.handleSubmit} className="login-form-box">
        Welcome to Timbre!
        <br/>
        Please { this.props.formType } or { this.navLink() }

        <div className="login-form">
          <br />
          <label> Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className="login-input" />
          </label>

          <br />
          <label> Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input" />
          </label>

          <br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
  );
}


}

export default withRouter(SessionForm);
