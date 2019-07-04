import React, { Component } from 'react';
import WheelItem from './WheelItem.js'
import './wheel_temp.css';


class Wheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotationCounter: 0,
    };
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
    this.rouletteWheel = this.rouletteWheel.bind(this);
    this.startSpin = this.startSpin.bind(this);
    this.rotateWheel = this.rotateWheel.bind(this);
    this.selectWinningNumber = this.selectWinningNumber.bind(this);
    this.rouletteNumbers = ['0','28','9','26','30','11','7','20','32','17','5','22','34','15','3','24','36','13','1','00','27','10','25','29','12','8','19','31','18','6','21','33','16','4','23','35','14','2'];
    this.segmentAngle = -9.4763684;
  }

  componentDidMount() {
    this.selectWinningNumber();
  }

  selectWinningNumber() {
    const totalWheelSegments = 38;
    const randomNumber = Math.floor(Math.random() * totalWheelSegments);
    this.props.updateWinningNumber(this.rouletteNumbers[randomNumber]);
  }

  setBackgroundColor(number, index) {
    return (number === '0' || number === '00') ? 'green' :
      ((parseInt(index) % 2 === 0) ? 'red' : 'black');
  };

  rotateWheel() {
    // can i rotate the wheel without completely re-rendering every 1 degree? Use css transition?
    this.setState({ rotationCounter: (this.state.rotationCounter+1) })
  };

  startSpin() {
    const waitTime = 50;
    for (let i=0; i<720; i++) {
      setTimeout(this.rotateWheel, waitTime);
    }
  };

  rouletteWheel() {
    const wheelItems = this.rouletteNumbers.map((number, index) => {
      return <WheelItem
        wheelNumber={number}
        id={number}
        angle={this.segmentAngle}
        angleMultiplier={index}
        backgroundColor={this.setBackgroundColor(number, index)}
        key={index}
      />
    });
    return wheelItems;
  };

  render() {
    return (
      <>
        <svg height="0" width="0">
          <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="sector">
              <path fill="none" stroke="#111" strokeWidth="1" className="sector" d="M0.5,0.5 l0.5,0 A0.5 0.5 0 0 0 0.9938 0.418 z"></path>
            </clipPath>
          </defs>
        </svg>
        <div className="wheel-container" style={{transform: `rotate(${this.state.rotationCounter}deg)`}}>
          <div className="menu-box">
            <ul className="menu wheel">
              {this.rouletteWheel()}
            </ul>
            <svg height="30%" width="30%" className="middle-circle" >
              <circle cx="50%" cy="50%" r="50" fill="black"  onClick={this.startSpin} />
            </svg>
          </div>
        </div>
        <button className="action-button" onClick={this.startSpin}>Spin</button>
      </>
    )
  }

};

export default Wheel;
