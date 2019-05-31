import React from 'react';
import HomePageContainer from './Containers/HomePageContainer';

function Main() {
  return (
      <div className="main">
        <img className = 'logo' src = './casino-royale.png' />
        <HomePageContainer />
      </div>
  );
}

export default Main;
