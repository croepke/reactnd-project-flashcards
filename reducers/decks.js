import { RECEIVE_DECKS, ADD_CARD, SAVE_DECK } from '../actions';

export function decks(state={}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_CARD:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: state[action.title].questions.concat([action.card])
        }
      }
    case SAVE_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    default:
      return state
  }
}

export default decks;
