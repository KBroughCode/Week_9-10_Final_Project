import React, { Component } from 'react';
import WheelItem from './WheelItem.js'
import './wheel_temp.css';


// refactoring to a class so that I can have state to control the speed of spin
class Wheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotationCounter: 0
    };
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
    this.rouletteWheel = this.rouletteWheel.bind(this);
    this.startSpin = this.startSpin.bind(this);
    this.rotateBoard = this.rotateBoard.bind(this);
    this.game = null;
    this.rouletteNumbers = ['0','28','9','26','30','11','7','20','32','17','5','22','34','15','3','24','36','13','1','00','27','10','25','29','12','8','19','31','18','6','21','33','16','4','23','35','14','2'];
    this.segmentAngle = -9.4763684;
  }

  componentDidMount() {
    this.startSpin();
  }

  setBackgroundColor(number, index) {
    if (number === '0' || number === '00') {
      return 'green';
    };
    return (parseInt(index) % 2 === 0) ? 'red' : 'black';
  };

  rotateBoard() {
    this.setState({rotationCounter: (this.state.rotationCounter+=1)})
  };

  startSpin() {
    if (this.props.betsPlaced) {
      const waitTime = 5;
      const spin = setInterval(this.rotateBoard, waitTime);
    }
  }


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
  // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
  // y coordinate is estimated
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
              <circle cx="50%" cy="50%" r="50" fill="black" />
            </svg>
          </div>
        </div>
      </>
    )
  }

};

export default Wheel;
