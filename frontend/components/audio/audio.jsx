import React from 'react';

class Audio extends React.Component{
  constructor(props){
    super(props)
    this.playing = this.playing.bind(this)
  }

  playing(){
      let song  = this.current;
      let height = this.size;
      $('#audio1').on('ended', () =>  {
          if (song >= height){
            song = 0;
          }
          let audio = this.refs.audio;
          let track_indexes = this.props.alltracks.map( track => (track.id));
          let curr_track = this.props.alltracks[track_indexes.indexOf(this.props.current_track) + song]
          audio.src = curr_track.url
          audio.pause();
          audio.play();
          song += 1;
        });
  }

//waveform peaks will bog down computer

  componentWillReceiveProps(nextProps) {
    this.songs = this.props.tracks
    this.current = 1;
    this.size = this.props.alltracks.length
    if (this.props.current_track !== nextProps.current_track) {
      let audio = this.refs.audio;
      let track_indexes = this.props.alltracks.map( track => (track.id));
      let curr_track = this.props.alltracks[track_indexes.indexOf(nextProps.current_track)]
      if (curr_track) {
        audio.src = curr_track.url
        audio.play();
        this.playing();
      }
    }
  }




render () {

    let playing ;
    let track_indexes = this.props.alltracks.map( track => (track.id));
    if(this.props.current_track){
      playing = this.props.alltracks[track_indexes.indexOf(this.props.current_track)]
    }

     console.log(playing)
     let hidden;
     playing ? hidden = "show": hidden = "hidden";
     return (
       <div>
         <audio  id="audio1" className={hidden} controls ref="audio" autoPlay></audio>

       </div>

     )

   }
}
export default Audio;
