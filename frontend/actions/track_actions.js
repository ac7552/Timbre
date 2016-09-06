export const TrackConstants  ={
  REQUEST_TRACK: "REQUEST_TRACK" ,
  REQUEST_TRACKS: "REQUEST_TRACKS",
  CREATE_TRACK: "CREATE_TRACK",
  RECIEVE_TRACKS: "RECIEVE_TRACKS"
};


export const requestTrack = (id) => ({
  type: TrackConstants.REQUEST_TRACK,
  id
});

export const requestTracks = () => ({
  type: TrackConstants.REQUEST_TRACKS
});

export const recieveTrack = (track) => ({
  type: TrackConstants.RECIEVE_TRACK,
  track
})

export const recieveTracks = (tracks) => ({
  type: TrackConstants.RECIEVE_TRACKS,
  tracks
})


export const createTrack = (track) => ({
  type: TrackConstants.CREATE_TRACK,
  track
})
