import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';

class EditForm extends React.Component{
  constructor(props){
      super(props);
      this.props.getTracks()
      this.state = ({
        title: "loading",
        url:  "loading",
        pic_url: "loading",
        artist: "loading",
        id: "loading",
        user_id: "loading"
      })


  this.handleSubmit = this.handleSubmit.bind(this);
  this.uploadTrack = this.uploadTrack.bind(this);
  this.uploadImage = this.uploadImage.bind(this);
}




handleSubmit (e) {
   e.preventDefault();
   this.props.edit(this.state)
   hashHistory.push("/home");
 }


 update(field){
   return e => {
     e.preventDefault();
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

    componentWillMount(){
      this.props.getTracks()
    }

   componentWillReceiveProps(nextProps){
     this.setState({
         title: nextProps.tracks[parseInt(nextProps.current_playing.id)].title,
         url:  nextProps.tracks[parseInt(nextProps.current_playing.id)].url,
         pic_url: nextProps.tracks[parseInt(nextProps.current_playing.id)].pic_url,
         artist: nextProps.tracks[parseInt(nextProps.current_playing.id)].artist,
         id: parseInt(nextProps.current_playing.id),
         user_id:  nextProps.tracks[parseInt(nextProps.current_playing.id)].user_id
     })
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
                placeholder={this.state.title}
                onChange={this.update("title")}
                className="upload-title" />
            <br/>
                <h3> Input a Track Artist: </h3>
                  <input type="artist"
                    placeholder={this.state.artist}
                    onChange={this.update("artist")}
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

export default withRouter(EditForm);
