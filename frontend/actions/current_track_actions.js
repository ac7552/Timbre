export const CurrentTrackConstants  ={
  RECIEVE_TRACK: "RECIEVE_TRACK"  ,
  RESTART: "RESTART"
};




export const recieveCurrentTrack = (track) => ({
  type:  CurrentTrackConstants.RECIEVE_TRACK,
  track
})

export const restart = () => ({
  type:  CurrentTrackConstants.RESTART

})
