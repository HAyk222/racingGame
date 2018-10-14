import React, {Component} from 'react';
import Mercedes from './svg/Mercedes.svg';
import BMW from './svg/BMW.svg';
import Toyota from './svg/Toyota.svg';
import Lexus from './svg/Lexus.svg';
import Audi from './svg/Audi.svg';

export default class GameTrack extends Component {
	carModel(expression){
    switch(expression) {
      case "Mercedes":
        return Mercedes
        break;
      case "BMW":
        return BMW
        break;
      case "Toyota":
        return Toyota
        break;
      case "Lexus":
        return Lexus
        break;
      default:
        return Audi
    }
  }
  render() {
  	const { data, start } = this.props
    return (
      <div className={`carTrack ${data.track[0].track}`}>
      	{ data.cars.map( (item, index) => { 
      		return (
      			<div key={index} className="carTrackLine">
      				<img src={this.carModel(item.model)}  alt="sedan" data-speed={item.speed*data.track[0].factor} className="playingCar" />
      			</div>
      		);
      	 } ) }
      	 {start && <span className="winnerText"> </span>}
      </div>
    );
  }
}