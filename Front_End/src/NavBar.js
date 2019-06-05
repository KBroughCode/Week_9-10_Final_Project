import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import "./navbar.css";

const Navbar = (props) => (
  <div>
    <div className='navbar'>
      <div className= 'text one'>₡{props.coins}</div>
        <Link className='link two' to="/" onClick= {props.resetDefault}>Home</Link>
        <Link className='link three' to="/Blackjack">Blackjack</Link>
        <Link className='link four' to="/Snap">Snap</Link>
        <Link className='link five' to="/OldMaid">Old Maid</Link>
    </div>
  </div>

);

const mapStateToProps = (state) => {
  return {
      coins: state.coins
    }
}

const mapDispatchToProps = (dispatch) => ({
    resetDefault(){
      dispatch({
        type: 'RETURN_DEFAULT'
      })
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
