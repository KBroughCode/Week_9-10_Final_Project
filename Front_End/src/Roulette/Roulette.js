import React, { Component } from "react";
import { connect } from 'react-redux';
import RouletteStartButton from './Components/RouletteStartButton';
import RouletteContainer from './Containers/RouletteContainer';

class Roulette extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };


  render(){
    return(
      <div className= "roulette">
        <RouletteContainer />
      </div>
    );

  };

};

const mapDispatchToProps = (dispatch) => ({

});


export default connect(null, mapDispatchToProps)(Roulette);
