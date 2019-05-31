import React from 'react';
import { Link } from "react-router-dom";
import Leaderboard from './Leaderboard';
import './homePage.css'

const HomePage = (props) => {
  return(
    <div>
      <div className="home-page-container">
        <div className="home-page-card">
          <div className = "back-of-card"></div>
          <div className = "front-of-card">
            <Link className='home-page-link' to="/Blackjack">Blackjack</Link>
          </div>
        </div>
        <div className="home-page-card">
        <span>
          <div>Snap</div>
          </span>
        </div>
        <div className="home-page-card">
        <span>
          <div>Old Maid</div>
          </span>
        </div>
      </div>
      <div>
        <Leaderboard />
      </div>
    </div>
  )
}

export default HomePage;
