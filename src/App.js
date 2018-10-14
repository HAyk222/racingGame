import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Menue from './components/Menue';
import Game from './components/Game';

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
      start: false,
      startButton: true
    }

    this.stop = false;

    this.addCar = this.addCar.bind(this)
    this.addTrack = this.addTrack.bind(this)
    this.startGame = this.startGame.bind(this)
  }

  addCar(item, i){
    let cars = this.state.cars;
    let obj = cars[i];
    let data = this.state.data;
    let dataCars = data.cars;
    if(obj.checked){
      obj.checked = false
      let index = dataCars.indexOf(item)
      dataCars.splice(index,1)
    }else{
      if(dataCars.length == 3){
        alert("You can add three car");
        return;
      }
      obj.checked = true
      dataCars.push(obj);
    }
    cars.splice(i,1,obj); 
    data.cars = dataCars;
    this.setState({ cars, data })
    this.canPlay();
  }

  removeAllTracks(tracks){
    for(let i = 0; i < tracks.length; i++){
      let obj = tracks[i];
      obj.checked = false;
      tracks.splice(i,1,obj);
    }
    this.setState({ tracks });
  }

  addTrack(i){
    let tracks = this.state.tracks;
    this.removeAllTracks(tracks);
    let  obj = tracks[i];
    obj.checked = true;
    tracks.splice(i,1,obj);
    let data = this.state.data;
    let dataTrack = data.track;
    dataTrack.length > 0 ? dataTrack[0] = obj : dataTrack.push(obj)
    data.track = dataTrack;
    this.setState({ tracks, data });
    console.log(this.state.data);
    this.canPlay();
  }

  canPlay(){
    (this.state.data.cars.length == 3 && this.state.data.track.length == 1) ? this.setState({ start:true }) : this.setState({ start:false })
  }

  startGame(){
    let cars = document.querySelectorAll(".playingCar");
    let carsData = this.state.data.cars;
    let shadow = this.state.data.track[0].track
    
    for( let i = 0; i < cars.length; i++ ){
      let speed = cars[i].dataset.speed*200/1000;
      let that = this;
      function play(el, from, to){
        el.classList.add("carShadow"+shadow);
        if(that.stop){
          let bestSpeedCar = carsData.sort((a,b) => a.speed<b.speed)[0].model;
          document.querySelector(".winnerText").innerText = `${bestSpeedCar} is WINNER`;
          document.querySelector(".winnerText").classList.add("winnerTextAnim");
          el.classList.remove("carShadow"+shadow);
          return;
        }
        if(from >= to-50){
          that.stop = true;
          el.classList.remove("carShadow"+shadow);
          return; 
        }
        else {
          let box = el;
          box.style.left = from + "px";
          setTimeout( function(){
            play(el, from + speed, to);
            
          }, 200) 
        }
      }
      play(cars[i], 0, document.querySelector(".carTrack").clientWidth);
    }
    this.setState({startButton:false})
  }

  render() {
    const { cars, tracks, data, start, startButton } = this.state
    return (
      <div className="App">
        <Header />
        <Menue cars={cars} tracks={tracks} data={data} start={start} addCar={this.addCar} addTrack={this.addTrack} />
        <Game cars={cars} tracks={tracks} data={data} start={start} startGame={this.startGame} startButton = {startButton} />
      </div>
    );
  }
}

export default App;
