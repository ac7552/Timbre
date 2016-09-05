import React from 'react';
var CLAudioPlayer = require('react-cl-audio-player');

class Audio extends React.Component{
  constructor(props){
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.current_track != nextProps.current_track) {
      const audio = this.refs.audio;
      console.log(this.props)
      const track_indexes = this.props.alltracks.map( track => (track.id));
      const curr_track = this.props.alltracks[track_indexes.indexOf(this.props.current_track)]
      if (curr_track) {
        audio.src = curr_track.url
        audio.play();
      }
    }
  }


render () {

    let playing ;
    const track_indexes = this.props.alltracks.map( track => (track.id));
    if(this.props.current_track){
      //  playing = this.props.alltracks.slice(track_indexes.indexOf(this.props.current_track))
      playing = this.props.alltracks[track_indexes.indexOf(this.props.current_track)]
    }
     return (
       <div>
       {/* {alert(playing)} */}
       { playing ? (
         <audio controls ref="audio">
          <source src={playing.url} type="audio/mp3"/>
          {/* <source src="horse.mp3" type="audio/mpeg"/> */}
        </audio>
      ) : <div></div> }

         {/* { playing.length ? (
           <CLAudioPlayer  className= "audioPlayer" songs={playing}/>
         ) : <div></div>} */}
       </div>

     )
   }
}
export default Audio;
