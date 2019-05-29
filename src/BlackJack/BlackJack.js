import React, { Component } from "react";
import { connect } from "react-redux";

class BlackJack extends Component {
  componentDidMount() {
    this.props.getDeck();
  }

  render() {
    return (
      <div className="App">
        <h1>CASINO BLACKJACK</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getDeck() {
    dispatch(() => {
      fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`)
        .then(res => res.json())
        .then(deck => {
          dispatch({
            type: "GET_DECK",
            deck
          });
        });
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(BlackJack);
