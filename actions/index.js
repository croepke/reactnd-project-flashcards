export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_CARD = 'ADD_CARD';
export const SAVE_DECK = 'SAVE_DECK';

import { getDecks, addCardToDeck, saveDeckTitle } from '../utils/api';

export function handleReceiveDecks() {
  return (dispatch) => {
    return getDecks()
      .then((decks) => {
        dispatch(receiveDecks(JSON.parse(decks)));
      })
  }
}

export function handleAddCard({ title, card }) {
  return (dispatch) => {
    addCardToDeck(title, card)
      .then(() => {
        dispatch(addCard(title, card))
      })
  }
}

export function handleSaveDeck(title) {
  return (dispatch) => {
    return saveDeckTitle(title)
      .then(() => {
        return dispatch(saveDeck(title));
      })
  }
}


function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

function addCard(title, card) {
  return {
    type: ADD_CARD,
    title,
    card
  }
}

function saveDeck(title) {
  return {
    type: SAVE_DECK,
    title
  }
}
