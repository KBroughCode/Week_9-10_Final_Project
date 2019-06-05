import snapReducer from '../snap_reducer'
import deepFreeze from 'deep-freeze';

describe("Snap reducer", () => {

  let initialState;

  beforeEach(() => {
    let initialState =[];
  })

  xtest('Test get snap deck ', () => {
    const deck = {
      "cards":
      [
        {
            "code": "8S",
            "suit": "SPADES",
            "value": "8",
            "images": {
                "png": "https://deckofcardsapi.com/static/img/8S.png",
                "svg": "https://deckofcardsapi.com/static/img/8S.svg"
                      },
            "image": "https://deckofcardsapi.com/static/img/8S.png"
        }
      ],
    }

    let action = {
      type:'GET_SNAP_DECK',
      deck: deck
    };
    deepFreeze(deck);
    expect(snapReducer(deck,action)).toEqual(deck);

  })
})
