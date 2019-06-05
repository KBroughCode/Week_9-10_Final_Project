import React, { Component } from 'react';
import {connect} from 'react-redux';
import HomePageContainer from './Containers/HomePageContainer';

class Main extends Component {


  componentDidMount(){
    this.props.getData()
  }

  render(){
    return (
      <div className="main">
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
            type: "GET_LEADER_DATA",
            casinoData
          });
        });
    });
  }
});

export default connect(null, mapDispatchToProps)(Main);
