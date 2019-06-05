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
          <div className="flip-card-inner card1">
            <div className = "flip-card-front"></div>
            <div className = "flip-card-back">
              <div className = "face"></div>
              <h3>Blackjack</h3>
              <p>The dealer will deal you 2 cards. You can keep your cards or ask for another but be careful - if your cards equate to more than 21 the dealer wins!</p>
              <Link className='home-page-link' to="/Blackjack">Play</Link>

            </div>
          </div>
          <div className="flip-card-inner card2">
            <div className = "flip-card-front"></div>
            <div className = "flip-card-back">
              <h3>Snap</h3>
              <p>The dealer will place cards on top of each other one at a time. When the value matches, SNAP! Be careful, though; you don't want to miss a pair or SNAP the wrong card...</p>
              <Link className='home-page-link' to="/Snap">Play</Link>
            </div>
          </div>
          <div className="flip-card-inner card3">
            <div className = "flip-card-front"></div>
            <div className = "flip-card-back">
              <h3>Old Maid</h3>
              <p>Test your skill against our championship Old Maid players; one player has the old maid, make sure it's not you! Trade cards and discard pairs until the loser is left standing.</p>
              <Link className='home-page-link' to="/Blackjack">Play</Link>
            </div>
            </div>
          </div>
        </div>
      <div className='cash-in'>
        <CashIn
          coins={props.coins}
          addHiScore={props.addHiScore}
        />
      </div>
      <div className='leaderboard'>
        <Leaderboard
          leaders = {props.leaders}
        />
      </div>
    </div>
  )
}

export default HomePage;
