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

   editTrack(track){
     hashHistory.push(`/tracks/${track.id}/edit`)
   }

   displayEdit(){
     if(this.props.current_user.id === this.props.track.user_id){
        return <button className="fa fa-pencil-square-o" onClick={this.editTrack.bind(this,this.props.track)}> Edit</button>
     }else{
       return <div/>
     }
   }

   displayDelete(){
     if(this.props.current_user.id === this.props.track.user_id){
        return <button className="fa fa-times" onClick={this.props.delete.bind(this,(this.props.track))}> Delete</button>
     }else{
       return <div/>
     }
   }

   render(){
     return(
       <div className="vcontainer">
        <div className="cover_art"  onClick={this.handleClick.bind(this,this.props.track)}>
          <p className="titleItem">{this.props.track.artist}</p>
          <img src={this.props.track.pic_url}  height="100" width="100"/>
          <br/>
        </div>
        <div className = "coverArtStuff">
        <p className="titleItem"> {this,this.props.track.title} </p>
        
        <button className="fa fa-comment-o" onClick={this.addComment.bind(this,this.props.track)}> Comment</button>
        <br/>
        {this.displayEdit()}
        <br/>
        {this.displayDelete()}
        </div>
        </div>
     );
   }


}

export default TrackListItem;
