import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';
import { createComment } from '../../actions/comment_actions';

class Comment extends React.Component{
  constructor(props){
      super(props);

  this.state = {
    body: ""
  };
  this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount(){
  this.props.getAllComments(this.props.current_playingID);
}



handleSubmit (e) {
   e.preventDefault();
   this.props.createComment({body: this.state.body, track_id: this.props.current_playingID});
 }

 update(field){
   return e => {
     // e.preventDefault();
     this.setState({[field]: e.currentTarget.value });
   };
 }



render(){
  const allComments = this.props.comments.map( comment => (
      <div className="comment-item">

        <ul>
          <li>{comment.body}</li>
          <h4>{this.props.current_user.username}</h4>
        </ul>
      </div>
  ));

  return (
    <div className = "comments-container">
    <div className="comment-form-container-outter-box">
      <div className="comment-form-container-inner-box">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div>
            <h4>  Comment Body: </h4>
              <textarea type="body"
                value={this.state.body}
                onChange={this.update("body")}
                className="form-inline" />
        </div>
        <input type="submit" value="Submit" className="btn btn-default" />
        </form>
      </div>
      </div>
        {allComments}
      </div>
  );
}


}

export default withRouter(Comment);
