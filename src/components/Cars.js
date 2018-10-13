import React, {Component} from 'react';
import Mercedes from './svg/Mercedes.svg';
import BMW from './svg/BMW.svg';
import Toyota from './svg/Toyota.svg';
import Lexus from './svg/Lexus.svg';
import Audi from './svg/Audi.svg';

export default class Cars extends Component {
  render() {
  	const { cars, tracks, data, start } = this.props
    return (
    	<div className="cars">
    		{ cars.map( (item, index) => { 
    			let url = window[item.model]
    			console.log(url)
    			return ( 
    				<div key={index} className="car"> 
    					<img src={window[item.model]}  alt="sedan" />
    				</div> 
    			);
    		 } ) }
    	</div>
    );
  }
}