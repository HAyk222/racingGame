import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Menue from './components/Menue';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cars: [ 
        { model: "Mercedes", speed: 48, checked: false }, 
        { model: "BMW", speed: 50, checked: false }, 
        { model: "Toyota", speed: 47, checked: false }, 
        { model: "Lexus", speed: 51, checked: false }, 
        { model: "Audi", speed: 49, checked: false } 
      ],
      tracks: [
        { track: "Asphalt", factor: 1.2, checked: false },
        { track: "Ice", factor: 0.7, checked: false },
        { track: "Ground", factor: 1, checked: false }
      ],
      data: {
        cars: [],
        track: []
      },
      start: false
    }
  }

  render() {
    const { cars, tracks, data, start } = this.state
    return (
      <div className="App">
        <Header />
        <Menue cars={cars} tracks={tracks} data={data} start={start} />
      </div>
    );
  }
}

export default App;
