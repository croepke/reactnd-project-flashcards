import { RECEIVE_DECKS } from '../actions';

export function decks(state={}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    default:
      return state
  }
}

export default decks;
