import React from 'react';
class Profile extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   profile_url: ""
    //   username: ""
    // };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.uploadImage = this.uploadImage.bind(this);
  }

  // uploadImage(e) {
  //    e.preventDefault();
  //     window.cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
  //     let pic_url = results[0].url
  //     this.setState({profile_pic: pic_url})
  //      if(!error){
  //      }
  //    }.bind(this));
  //  }
  //
  // handleSubmit (e) {
  //    e.preventDefault();
  //    this.props.editUser(this.state);
  //  }
  //
  //  update(field){
  //     return e => {
  //       this.setState({[field]: e.currentTarget.value });
  //     };
  //   }


  render(){
    return(
      <div>
      <h1>{this.props.currentUser.username} </h1>
           {/* <form onSubmit={this.handleSubmit} className="form-inline">
             <div>
               <label>Enter a new Username
               <input type="title"
                 value={this.state.title}
                 onChange={this.update("title")}
                 className="form-control" />
               </label>
             </div>
             <br/>
             <button onClick={this.uploadImage} className="btn btn-default"> Upload Image </button>
             <br/>
             <br/>
             <input type="submit" value="Submit" className="btn btn-default" />
           </form> */}
      </div>

    )
  }
};

export default Profile;
