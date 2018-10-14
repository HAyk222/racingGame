import React, {Component} from 'react';
import Mercedes from './svg/Mercedes.svg';
import BMW from './svg/BMW.svg';
import Toyota from './svg/Toyota.svg';
import Lexus from './svg/Lexus.svg';
import Audi from './svg/Audi.svg';

export default class Cars extends Component {
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

  cl(active, i){
    if(this.props.cars[i].checked){
      return active;
    }
  } 

  render() {
  	const { cars, tracks, data, start, addCar } = this.props 
    return (
    	<div className="cars">
    		{ cars.map( (item, index) => { 
    			return ( 
    				<div key={index} className={ cars[index].checked ? "car carActive" : "car" } onClick={() => addCar(item, index)} > 
    					<img src={this.carModel(item.model)}  alt="sedan" />
              <div>{item.model} {item.speed}px</div>
              {cars[index].checked ? <span className="red"> Remove </span> : <span> Add </span>}
    				</div> 
    			);
    		 } ) }
    	</div>
    );
  }
}