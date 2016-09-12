import React from 'react';
import { Link, hashHistory } from 'react-router';

class TrackListItem extends React.Component {
  constructor(props){
    super(props);
  }

   handleClick(track){
       this.props.update_current(track);
       this.setState({current_track: track})
   }

   addComment(track){
     this.props.getSongComments(track);
     hashHistory.push(`/tracks/${track.id}/comments`)
   }

   render(){
     return(
       <div className="vcontainer">
        <div className="cover_art"  onClick={this.handleClick.bind(this,this.props.track)}>
          <img src={this.props.track.pic_url}  height="100" width="100"/>
          <br/>
          <p>{this.props.track.artist}</p>

        </div>
        {/* <h4>{this,this.props.track.title}</h4> */}
        <button onClick={this.addComment.bind(this,this.props.track)}>{this,this.props.track.title}</button>
        </div>
     );
   }


}

export default TrackListItem;
