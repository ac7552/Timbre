export const CurrentTrackConstants  ={
  RECIEVE_TRACK: "RECIEVE_TRACK"
};




export const recieveCurrentTrack = (current_track) => ({
  type:  CurrentTrackConstants.RECIEVE_TRACK,
  current_track
})
