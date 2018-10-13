import React, {Component} from 'react';

// export default class Clock extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             date: new Date(),
//             label: 'Current time is: ',
//             counter: 0,
//         };

//         this.tick = this.tick.bind(this);
//     }

//     componentDidMount() {
//         this.timerID = setInterval(this.tick, 1000);
//     }

//     componentDidUpdate() {
//         if (this.state.counter === 10) {
//             clearInterval(this.timerID);
//         }
//     }

//     tick() {
//         this.setState({
//             date: new Date(),
//             counter: this.state.counter + 1
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.label}</h1>
//                 <p>{this.props.brand}</p>
//                 {
//                     this.state.counter === 10 
//                     ? <p>It takes more than 10 seconds</p>
//                     : <p>{this.state.date.toLocaleTimeString()}</p>
//                 }
//             </div>
//         );
//     }
// }

export default class Header extends Component {
  render() {
    return (
        <header className="App-header">Racing Game</header>
    );
  }
}