import React from 'react';
import { Link } from "react-router-dom";
import Leaderboard from '../Components/Leaderboard';
import CashIn from '../Components/CashIn';
import './homePage.css'

const HomePage = (props) => {
  return(
    <div>
      <div className="home-page-container">
        <div className = "flip-card">
          <div className="flip-card-inner">
            <div className = "flip-card-front"></div>
            <div className = "flip-card-back">
              <div className = "face"></div>
              <h3>Blackjack</h3>
              <p>The dealer will deal you 2 cards. You can keep your cards or ask for another but be careful - if your cards equate to more than 21 the dealer wins!</p>
              <Link className='home-page-link' to="/Blackjack">Play</Link>

            </div>
          </div>
          <div className="flip-card-inner">
            <div className = "flip-card-front"></div>
            <div className = "flip-card-back">
              <h3>Snap</h3>
              <p>The dealer will deal you 2 cards. You can keep your cards or ask for another but be careful - if your cards equate to more than 21 the dealer wins!</p>
              <Link className='home-page-link' to="/Snap">Play</Link>
            </div>
          </div>
          <div className="flip-card-inner">
            <div className = "flip-card-front"></div>
            <div className = "flip-card-back">
              <h3>Old Maid</h3>
              <p>The dealer will deal you 2 cards. You can keep your cards or ask for another but be careful - if your cards equate to more than 21 the dealer wins!</p>
              <Link className='home-page-link' to="/Blackjack">Play</Link>
            </div>
            </div>
          </div>
        </div>
      <div>
        <CashIn
          coins={props.coins}
        />
      </div>
      <div>
        <Leaderboard
          leaders= {props.leaders}
        />
      </div>
    </div>
  )
}

export default HomePage;
