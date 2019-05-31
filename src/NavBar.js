import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => (

  <ul className='navbar'>
    <div className='link'>
      <Link className='link' to="/">Home</Link>
    </div>
    <div className='link'>
      <Link className='link' to="/Blackjack">Blackjack</Link>
    </div>
  </ul>


);

export default Navbar;
