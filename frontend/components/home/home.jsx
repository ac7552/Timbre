import React from 'react';
import TrackList from '../tracks/tracklist_container'
import Audio from '../audio/audio_container'
class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
          <h1> Home Page </h1>
          <TrackList/>
          <div id="waveform" width="200"></div>
      </div>
    )


  }
};
export default Home;
