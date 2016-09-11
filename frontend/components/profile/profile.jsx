import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';

class Profile extends React.Component{
  constructor(props){
      super(props);
  this.state = {
    username: this.props.currentUser.username,
    profile_pic: this.props.currentUser.profile_pic,
    about: this.props.currentUser.about
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

// componentWillReceiveProps(nextProps){
//   let user = {username: this.state.username, id: nextProps.currentUser.id, profile_pic: this.state.profile_pic, about: this.state.about}
//   nextProps.get_user(user)
// }

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
   <div class="profileStuff">

    <div className="profile-form-container-outter-box">
    <img className="profilePic" height="100" width="100" src={this.props.currentUser.profile_pic}/>
    <h1 className="username"> {this.props.currentUser.username} </h1>
    <h4 className="aboutText"> {this.props.currentUser.about} </h4>
      <div className="profile-form-container-inner-box">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div>
            <h4> Update About Me </h4>
            <textarea type="about"
              value={this.state.about}
              onChange={this.update("about")}
              className="form-about"/>
              <br/>
              <h4> Change Username  </h4>
              <input type="username"
                value={this.state.username}
                onChange={this.update("username")}
                className="form-username"/>
        </div>
        <br/>
        <button onClick={this.uploadImage} className="profile-button"> Upload Profile Picture </button>
        <br/>
        <input type="submit" value="Submit" className="profile-button" />
        <br/>
        </form>
      </div>
      </div>
      </div>






  );
}


}

export default withRouter(Profile);
