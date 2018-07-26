export const RECEIVE_DECKS = 'RECEIVE_DECKS';

import { getDecks } from '../utils/api';

export function handleReceiveDecks() {
  return (dispatch) => {
    return getDecks()
      .then((decks) => {
        dispatch(receiveDecks(JSON.parse(decks)));
      })
  }
}

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}
