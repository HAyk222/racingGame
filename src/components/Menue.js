import React, {Component} from 'react';
import Cars from './Cars';
import Tracks from './Tracks';

export default class Menue extends Component {
  render() {
  	const { cars, tracks, data, start } = this.props
    return (
      <div className="menue-content">
      	<Cars cars={cars} tracks={tracks} data={data} start={start} />
      	<Tracks cars={cars} tracks={tracks} data={data} start={start} />
      </div>
    );
  }
}