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
  return AsyncStorage.getItem('decks', (err, result) => {
    if(result !== null) {
      return AsyncStorage.mergeItem('decks', JSON.stringify({
        [title]: deck
      }));
    }
    else {
      return AsyncStorage.setItem('decks', JSON.stringify({
        [title]: deck
      }))
    }
  });
}

export function addCardToDeck(title, card) {
  // take in two arguments, title and card, and will add the card to the list
  // of questions for the deck with the associated title.
  return AsyncStorage.getItem('decks')
    .then((str) => {
      let data = JSON.parse(str);
      data[title].questions = data[title].questions.concat([card]);
      return AsyncStorage.setItem('decks', JSON.stringify(data))
    })
}
