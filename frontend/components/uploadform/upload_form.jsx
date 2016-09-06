import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';
import { createTrack } from '../../actions/track_actions';

class UploadForm extends React.Component{
  constructor(props){
      super(props);

  this.state = {
    title: "",
    description: ""
  };
  this.handleSubmit = this.handleSubmit.bind(this);
}


handleSubmit (e) {
   e.preventDefault();
   this.props.createTrack(this.state);
 }


  upload(e) {
     e.preventDefault();
      window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
       if(!error){
         this.props.createTrack(results[0]);
       }
     }.bind(this));
   }

render(){
  return (
    <div className="upload-form-container-outter-box">
      <div className="upload-form-container-inner-box">
      <form onSubmit={this.handleSubmit} className="upload-form-box">
        Please upload your Audio!
        <br/>
        <div className="upload-form">
          <br />
          <label> Cover:
            <input type="title"
              value={this.state.title}
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
