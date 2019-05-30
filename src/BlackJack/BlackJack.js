import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerContainer from "./Containers/PlayerContainer";
import DealerContainer from "./Containers/DealerContainer";

class BlackJack extends Component {
  componentDidMount() {
    this.props.getDeck();
  }

  render() {
    return (
      <div className="black-jack">
        <PlayerContainer />
        <DealerContainer />
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
          console.log(deck.deck_id);
          fetch(
            `https://deckofcardsapi.com/api/deck/${
              deck.deck_id
            }/draw/?count=312`
          )
            .then(res => res.json())
            .then(deck => {
              console.log("AFTER SECOND API", deck);
              dispatch({
                type: "GET_DECK",
                deck
              });
            });
        });
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(BlackJack);
