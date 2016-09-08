export const CommentConstants  ={
  REQUEST_SONG_COMMENTS: "REQUEST_SONGS_COMMENTS" ,
  RECIEVE_COMMENTS: "RECIEVE_COMMENTS",
  RECIEVE_COMMENT: "RECIEVE_COMMENT",
  CREATE_COMMENT: "CREATE_COMMENT"
};

export const requestSongComments = (trackID) => ({
  type: CommentConstants.REQUEST_SONG_COMMENTS,
  trackID
});


export const recieveSongComment = (comment) => ({
  type: CommentConstants.RECIEVE_COMMENT,
  comment
});

export const recieveSongComments = (comments) => ({
  type: CommentConstants.RECIEVE_COMMENTS,
  comments
});

export const createComment = (comment) => ({
  type: CommentConstants.CREATE_COMMENT,
  comment
});
