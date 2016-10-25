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

export const createTrack = (track,success) => {
  $.ajax({
  		method: 'POST',
  		url: '/api/tracks',
  		data: {track: track},
  		success,
      error: ()=> (
        console.log("Invalid Track Params")
      )
  	});
};


export const deleteTrack = (track,success) => {
  $.ajax({
  		method: 'DELETE',
  		url: `/api/tracks/${track.id}`,
  		data: {track: track},
  		success,
      error: ()=> (
        console.log("Invalid Track Params")
      )
  	});
};


export const updateTrack = (track,success) => {
  $.ajax({
  		method: 'PATCH',
      url: `/api/tracks/${track.id}`,
  		data: {track: track},
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
