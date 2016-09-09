import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';

class Profile extends React.Component{
  constructor(props){
      super(props);
  this.state = {
    username: this.props.currentUser.username,
    profile_pic: "",
    about: ""
  };
  this.handleSubmit = this.handleSubmit.bind(this);
  this.uploadImage = this.uploadImage.bind(this);
}
//
// componentDidMount(){
//   this.props.getAllComments(this.props.current_playingID);
// }

// componentWillReceiveProps(nextProps){
//   this.props.user_get({username: this.state.username, id: this.props.currentUser.id, profile_pic: this.state.profile_pic});
// }

uploadImage(e) {
   e.preventDefault();
    window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
    let pic_url = results[0].url
    this.setState({profile_pic: pic_url})
     if(!error){
     }
   }.bind(this));
 }


handleSubmit (e) {
   e.preventDefault();
   this.props.user_edit({username: this.state.username, id: this.props.currentUser.id, profile_pic: this.state.profile_pic, about: this.state.about});
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
   <h1> {this.props.currentUser.username} </h1>
   <h4 className="aboutText"> {this.props.currentUser.about} </h4>
   <img className="profilePic" height="100" width="100" src={this.props.currentUser.profile_pic}/>
    <div className="profile-form-container-outter-box">
      <div className="profile-form-container-inner-box">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div>
            <h4> Change Username </h4>
            <textarea type="about"
              value={this.state.about}
              onChange={this.update("about")}
              className="form-inline"/>
              <h4> Update About Me </h4>
              <input type="username"
                value={this.state.username}
                onChange={this.update("username")}
                className="form-inline"/>
        </div>
        <br/>
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
