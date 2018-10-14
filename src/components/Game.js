import React, {Component} from 'react';
import GameTrack from './GameTrack';

export default class Game extends Component {
	constructor(props){
		super(props);
		
	}
	


  render() {
  	const { cars, tracks, data, start, startGame, startButton } = this.props
    return (
    	<div>
      	<input type="button" value="start" onClick={() => startGame()} className={ start && startButton ? "startButton activeStartButton" : "startButton" } disabled={start && startButton ? "" : "disabled"}   />
      	{start && <GameTrack data={data} start={start} /> }
      	
    	</div>
    );
  }
}