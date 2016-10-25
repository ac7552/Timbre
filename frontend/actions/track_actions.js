export const TrackConstants  ={
  REQUEST_TRACK: "REQUEST_TRACK" ,
  REQUEST_TRACKS: "REQUEST_TRACKS",
  CREATE_TRACK: "CREATE_TRACK",
  RECIEVE_TRACKS: "RECIEVE_TRACKS",
  RECIEVE_TRACK: "RECIEVE_TRACK",
  EDIT_TRACK: "EDIT_TRACK",
  RECIEVE_EDIT: "RECIEVE_EDIT",
  DELETE_TRACK: "DELETE_TRACK",
  CREATED_TRACK: "CREATED_TRACK",
  DELETED_TRACK: "DELETED_TRACK"
};


export const requestTrack = (id) => ({
  type: TrackConstants.REQUEST_TRACK,
  id
});

export const requestTracks = () => ({
  type: TrackConstants.REQUEST_TRACKS
});

export const recieveEdit = (track) => ({
  type: TrackConstants.RECIEVE_EDIT,
  track
})

export const recieveTracks = (tracks) => ({
  type: TrackConstants.RECIEVE_TRACKS,
  tracks
})

export const recieveTrack = (track) => ({
  type: TrackConstants.RECIEVE_TRACK,
  track
})

export const createTrack = (track) => ({
  type: TrackConstants.CREATE_TRACK,
  track
})

export const removedTrack = (track) => ({
  type: TrackConstants.DELETED_TRACK,
  track
})

export const removeTrack = (track) => ({
  type: TrackConstants.DELETE_TRACK,
  track
})

export const editTrack = (track) => ({
  type: TrackConstants.EDIT_TRACK,
  track
})
