export const fetchTrack = (id) => {
  $.ajax({
  		method: 'GET',
  		url: `/api/tracks/${id}`,
  		success,
  		error: ()=> (
        console.log("Invalid Track")
      )
  	});
};

export const createTrack = (track) => {
  $.ajax({
  		method: 'POST',
  		url: '/api/tracks',
  		data: track,
  		success,
      error: ()=> (
        console.log("Invalid Track Params")
      )
  	});
};


export const fetchTracks = (success) => {
  $.ajax({
  		method: 'GET',
  		url: `/api/tracks`,
  		success,
  		error: ()=> (
        console.log("Invalid Track")
      )
  	});
};
