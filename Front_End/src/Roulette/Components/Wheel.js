import React from 'react';
import './wheel_temp.css';

const Wheel = (props) => {

  return (

    <>
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 10 H 90 V 90 H 30 L 10 10"/>
        <circle cx="10" cy="10" r="2" fill="red"/>
        <circle cx="90" cy="90" r="2" fill="red"/>
        <circle cx="90" cy="10" r="2" fill="red"/>
        <circle cx="10" cy="90" r="2" fill="red"/>
      </svg>
      <svg height="0" width="0">
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="sector">
            <path fill="lime" stroke="#111" strokeWidth="1" className="sector" d="M0.5,0.5 l0.5,0 A0.5,0.5 0 0,0 0.75,.066987298 z"></path>
          </clipPath>
        </defs>
      </svg>
      <ul className="menu">
        <li className="wheel-one">
          <a href="#">
            <span className="icon">icon-1</span>
          </a>
        </li>
        <li className="wheel-two">
          <a href="#">
            <span className="icon">icon-2</span>
          </a>
        </li>
        <li className="wheel-three">
          <a href="#">
            <span className="icon">icon-3</span>
          </a>
        </li>
        <li className="wheel-four">
          <a href="#">
            <span className="icon">icon-4</span>
          </a>
        </li>
        <li className="wheel-five">
          <a href="#">
            <span className="icon">icon-5</span>
          </a>
        </li>
        <li className="wheel-six">
          <a href="#">
            <span className="icon">icon-6</span>
          </a>
        </li>
      </ul>
    </>

  )

};

export default Wheel;
