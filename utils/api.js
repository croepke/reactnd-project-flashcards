import { AsyncStorage } from 'react-native';

export function getDecks() {
  return AsyncStorage.getItem('decks');
}

export function getDeck(id) {
  return AsyncStorage.getItem(id);
}

export function clear(id) {
  return AsyncStorage.clear();
}

export function saveDeckTitle(title) {
  // take in a single title argument and add it to the decks.
  const deck = {
    'title': title,
    questions: []
  };
  AsyncStorage.getItem('decks', (err, result) => {
    if(result !== null) {
      AsyncStorage.mergeItem('decks', JSON.stringify({
        [title]: deck
      }));
    }
    else {
      AsyncStorage.setItem('decks', JSON.stringify({
        [title]: deck
      }))
    }
  });
}
export function addCardToDeck(title, card) {
  // take in two arguments, title and card, and will add the card to the list
  // of questions for the deck with the associated title.
}
