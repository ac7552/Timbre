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

        <div className="audio" onClick={this.handleClick.bind(this,this.props.track)}>{this.props.name}</div>
       
     );
   }


}

export default TrackListItem;
