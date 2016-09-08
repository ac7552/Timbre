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
          <h1> Discover Timbre Tracks </h1>
          <TrackList/>
      </div>
    )


  }
};
export default Home;
