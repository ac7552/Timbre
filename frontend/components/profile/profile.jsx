import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';

class Profile extends React.Component{
  constructor(props){
      super(props);

  this.state = {
    username: "",
    profile_pic: ""
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.uploadImage = this.uploadImage.bind(this);
}
//
// componentDidMount(){
//   this.props.getAllComments(this.props.current_playingID);
// }

uploadImage(e) {
   e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
    let pic_url = results[0].url
    this.setState({pic_url: pic_url})
     if(!error){
     }
   }.bind(this));
 }


handleSubmit (e) {
   e.preventDefault();
   this.props.user_edit({username: this.state.username, id: this.props.currentUser.id});
 }

 update(field){
   return e => {
     // e.preventDefault();
     this.setState({[field]: e.currentTarget.value });
   };
 }



render(){

  return (
   <div>
    <div className="login-form-container-outter-box">
      <div className="login-form-container-inner-box">
        <form onSubmit={this.handleSubmit} className="form-inline">

          <div>
            <h4> Change Username </h4>
              <textarea type="username"
                value={this.state.username}
                onChange={this.update("username")}
                className="form-inline"/>
        </div>
        <input type="submit" value="Submit" className="btn btn-default" />
        <button onClick={this.uploadImage} className="btn btn-default"> Upload Image </button>
        </form>
      </div>
      </div>
      </div>






  );
}


}

export default withRouter(Profile);
