import React from 'react';
class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <h1>{this.props.currentUser.username} </h1>
      {this.props.children}
      </div>
    )
  }
};

export default Profile;
