import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import "./navbar.css";

const Navbar = (props) => (
  <div>
    <div className='navbar'>
      ₡{props.coins}
      <div className='link'>
        <Link className='link' to="/" onClick= {props.resetDefault}>Home</Link>
      </div>
      <div className='link'>
        <Link className='link' to="/Blackjack">Blackjack</Link>
      </div>
      <div className='link'>
        <Link className='link' to="/Snap">Snap</Link>
      </div>
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
