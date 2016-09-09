import React from 'react';
import Comment from './comments';
import { connect } from 'react-redux';
import { createComment, requestSongComments  } from '../../actions/comment_actions';

  const mapStateToProps = (state,ownProps) => ({
    comments: state.comments,
    current_playingID: ownProps.params.id,
    current_user: state.session.currentUser
    //own props available to this component because of react router
    //makes routes params avaiable through ownprops.params
  });


  const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    getAllComments: (trackID) => dispatch(requestSongComments(trackID))
  });

//when exporting doesn't matter what call it afterwards  only default
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Comment);
