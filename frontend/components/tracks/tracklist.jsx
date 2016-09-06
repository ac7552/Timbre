import React from 'react';
import TrackListItem from './tracklist_item_container';
import Audio from '../audio/audio_container'

 class TrackList extends React.Component{
   constructor(props){
     super(props);

   }
    // componentDidMount(){
    //   this.props.requestTracks();
    // }

    render(){
      const  alltracks = Object.keys(this.props.tracks).map ( id =>(
        <TrackListItem key={`track-list-item${id}`} track={this.props.tracks[id]}/>
      ))
      return (
        <div>
          {alltracks}
        </div>
      )
    };

  };




export default TrackList;
