import React, { Component } from 'react';
import {connect} from 'react-redux';
import HomePageContainer from './Containers/HomePageContainer';

class Main extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getData()
  }

  render(){
    return (
      <div className="main">
        <img className = 'logo' src = 'http://pngimg.com/uploads/roulette/roulette_PNG24.png' alt='logo' />
        <HomePageContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getData() {
    dispatch(() => {
      fetch("http://localhost:3000/api/casino/scores")
        .then(res => res.json())
        .then(casinoData => {
          return dispatch({
            type: "ADD_LEADER_DATA",
            casinoData
          });
        });
    });
  }
});



export default connect(null, mapDispatchToProps)(Main);
