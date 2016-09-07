import React from 'react';

class TrackListItem extends React.Component {
  constructor(props){
    super(props);
  }

   handleClick(track){
       this.props.update_current(track);
       this.setState({current_track: track})
   }

   render(){
     return(

        <div className="audio" onClick={this.handleClick.bind(this,this.props.track)}>
          <img src={this.props.track.pic_url}  height="200" width="200"/>
        </div>

     );
   }


}

export default TrackListItem;
