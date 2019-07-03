import React from 'react';
import WheelItem from './WheelItem.js'
import './wheel_temp.css';

const setBackgroundColor = (number, index) => { // what is the scope of this function?
  if (number === '0' || number === '00') {
    return 'green';
  };
  return (parseInt(index) % 2 === 0) ? 'red' : 'black';
};

const Wheel = (props) => {

  const rouletteNumbers = ['0','28','9','26','30','11','7','20','32','17','5','22','34','15','3','24','36','13','1','00','27','10','25','29','12','8','19','31','18','6','21','33','16','4','23','35','14','2'];

  const segmentAngle = -9.4763684;

  const rouletteWheel = rouletteNumbers.map((number, index) => {
    return <WheelItem
      wheelNumber={number}
      id={number}
      angle={segmentAngle}
      angleMultiplier={index}
      backgroundColor={setBackgroundColor(number, index)}
      key={index}
    />
  });

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
      <div className="menu-box">
        <ul className="menu wheel">
          {rouletteWheel}
        </ul>
      </div>
      <svg height="100%" width="100%" id="TEMP-CIRCLE" >
        <circle cx="50%" cy="50%" r="50" fill="black" zIndex='1' />
      </svg>
    </>
  )

};

export default Wheel;
