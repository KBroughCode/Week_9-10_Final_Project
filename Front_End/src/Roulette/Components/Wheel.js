import React, { Component } from 'react';
import WheelItem from './WheelItem';
import './wheel.css';
import SpinButton from './SpinButton';

class Wheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinResult: null
    };
    this.rouletteWheel = this.rouletteWheel.bind(this);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);
    this.selectWinningNumber = this.selectWinningNumber.bind(this);
    this.rouletteNumbers = ['0','28','9','26','30','11','7','20','32','17','5','22','34','15','3','24','36','13','1','00','27','10','25','29','12','8','19','31','18','6','21','33','16','4','23','35','14','2'];
    this.segmentAngle = -360/38;
  }
  componentDidMount() {
    this.selectWinningNumber();
  }

  componentDidUpdate(prevProps) {
    if (this.props.wheelSpinCompleted !== prevProps.wheelSpinCompleted) {
      this.props.updateWinningNumber(this.state.spinResult)
    }
  }

  selectWinningNumber() {
    const totalWheelSegments = 37;
    const randomNumber = Math.floor(Math.random() * totalWheelSegments);
    this.setState({ spinResult: randomNumber});

  }

  setBackgroundColor(number, index) {
    return (number === '0' || number === '00') ? '#1D7137' :
      ((parseInt(index) % 2 === 0) ? 'red' : 'black');
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
        <div className='wheel-flex'>
          <svg height="0" width="0">
            <defs>
              <clipPath clipPathUnits="objectBoundingBox" id="sector">
                <path fill="none" stroke="#111" strokeWidth="1" className="sector" d="M0.5,0.5 l0.5,0 A0.5 0.5 0 0 0 0.9938 0.418 z"></path>
              </clipPath>
            </defs>
          </svg>
          <div className={this.props.wheelCssClasses} >
            <div className="menu-box">
              <ul className="menu wheel">
                {this.rouletteWheel()}
              </ul>
              <svg height="30%" width="30%" className="middle-circle" >
                <circle cx="50%" cy="50%" r="50" fill="black"  onClick={this.startSpin} />
              </svg>
            </div>
          </div>
        </div>
      </>
    )
  }

};

export default Wheel;
