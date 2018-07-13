import { AsyncStorage } from 'react-native';

export function getDecks() {
  return AsyncStorage.getItem();
}

export function getDeck(id) {
  return AsyncStorage.getItem(id);
}

export function saveDeckTitle(title) {
  // take in a single title argument and add it to the decks.
}

export function addCardToDeck(title, card) {
  // take in two arguments, title and card, and will add the card to the list
  // of questions for the deck with the associated title. 
}
