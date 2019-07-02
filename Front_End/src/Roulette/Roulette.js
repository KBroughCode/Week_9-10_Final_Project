import React, { Component } from "react";
import { connect } from 'react-redux';
import RouletteContainer from './Containers/RouletteContainer';
import './roulette.css'

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
