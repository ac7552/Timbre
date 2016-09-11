import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';
import { createTrack } from '../../actions/track_actions';

class UploadForm extends React.Component{
  constructor(props){
      super(props);

  this.state = {
    title: "",
    url: "",
    pic_url: ""
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.uploadTrack = this.uploadTrack.bind(this);
  this.uploadImage = this.uploadImage.bind(this);

}


handleSubmit (e) {
   e.preventDefault();
   this.props.createTrack(this.state);
   hashHistory.push("/");
 }

 update(field){
   return e => {
     // e.preventDefault();
     this.setState({[field]: e.currentTarget.value });
   };
 }



  uploadTrack(e) {
     e.preventDefault();
      window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      let track_url = results[0].url
      this.setState({url: track_url})
       if(!error){
       }
     }.bind(this));
   }

   uploadImage(e) {
      e.preventDefault();
       window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
       let pic_url = results[0].url
       this.setState({pic_url: pic_url})
        if(!error){
        }
      }.bind(this));
    }


render(){
  return (
    <div>
    <div className="upload-form-container-outter-box">
      <div className="upload-form-container-inner-box">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div>
            <h3> Input a Track Title: </h3>
              <input type="title"
                value={this.state.title}
                onChange={this.update("title")}
                className="upload-title" />
          <ul>
            <br/>
            <li> <button onClick={this.uploadTrack} className="btn btn-default"> Upload Track </button></li>
            <br/>
            <li> <button onClick={this.uploadImage} className="btn btn-default"> Upload Image </button></li>
            <br/>
            <li> <input type="submit" value="Submit" className="uploadSubmit" /></li>
            </ul>
          </div>
        </form>
      </div>
      </div>
      </div>

  );
}


}

export default withRouter(UploadForm);
