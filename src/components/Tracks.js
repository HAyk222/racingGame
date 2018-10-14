import React, {Component} from 'react';
import Asphalt from './images/asphalt.jpg';
import Ice from './images/ice.jpg';
import Ground from './images/ground.jpg';

export default class Tracks extends Component {
	carTrack(expression){
    switch(expression) {
      case "Asphalt":
          return Asphalt
          break;
      case "Ice":
          return Ice
          break;
      default:
          return Ground
    }
  } 
  render() {
  	const { cars, tracks, data, start, addTrack } = this.props 
    return (
    	<div className="tracks">
    		{ tracks.map( (item, index) => { 
    			return (
    				<div key={index} className={ tracks[index].checked ? "track trackActive" : "track" } onClick={() => addTrack(index)}  >
    					<img src={this.carTrack(item.track)} />
    					<div>{item.track}</div>
    					<div>Factor: {item.factor}</div>
    				</div>
    			);
    		} ) }
    	</div>
    );
  }
}