

export const makeComment = (comment,success) => {
  $.ajax({
  		method: 'POST',
  		url: '/api/comments',
  		data: {comment: comment},
  		success,
      error: ()=> (
        console.log("Invalid Comment Params")
      )
  	});
};


export const fetchComments = (trackID, success) => {
  $.ajax({
  		method: 'GET',
      data: {track_id: trackID},
  		url: `/api/comments`,
  		success,
  		error: ()=> (
        console.log("Invalid Comment")
      )
  	});
};
