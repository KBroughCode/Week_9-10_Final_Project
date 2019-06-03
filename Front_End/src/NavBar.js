import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import "./navbar.css";

const Navbar = (props) => (
  <div>
    <div className='navbar'>
      ₡{props.coins}
      <div className='link'>
        <Link className='link' to="/">Home</Link>
      </div>
      <div className='link'>
        <Link className='link' to="/Blackjack">Blackjack</Link>
      </div>
      <div className='link'>
        <Link className='link' to="/Snap">Snap</Link>
      </div>
      <div className='link'>
        <Link className='link' to="/OldMaid">Old Maid</Link>
      </div>
    </div>
  </div>

);

const mapStateToProps = (state) => {
  return {
      coins: state.coins
    }
}

export default connect(mapStateToProps)(Navbar);
