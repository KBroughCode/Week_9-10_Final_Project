import React from 'react';
import { Link } from "react-router-dom";
import Leaderboard from './Leaderboard';
import './homePage.css'

const HomePage = (props) => {
  return(
    <div>
      <div className="home-page-container">
        <div className="home-page-card">
          <Link className='home-page-link' to="/Blackjack">Blackjack</Link>
        </div>
        <div className="home-page-card">
          <div>Snap</div>
        </div>
        <div className="home-page-card">
          <div>Old Maid</div>
        </div>
      </div>
      <div>
        <Leaderboard />
      </div>
    </div>
  )
}

export default HomePage;
