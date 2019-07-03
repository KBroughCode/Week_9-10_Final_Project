import React from 'react';

const WheelItem = (props) => {

  return (
    <li
      className='wheel-item'
      style={{
        transform: `rotate(${props.angle*props.angleMultiplier}deg)`,
        backgroundColor: `${props.backgroundColor}`,
        zIndex: 0
        }}
    >
      <span className="icon">{props.wheelNumber}</span>
    </li>
  )

}

export default WheelItem;
