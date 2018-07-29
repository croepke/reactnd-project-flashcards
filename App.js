import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import DeckListView from './components/DeckListView';
import DeckView from './components/DeckView';
import NewQuestion from './components/NewQuestion';
import NewDeck from './components/NewDeck';
import Quiz from './components/Quiz';
import { setLocalNotification } from './utils/helpers';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';
import middleware from './middleware'

const store=createStore(reducer, middleware);

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: DeckListView,
    Details: DeckView,
    NewQuestion: NewQuestion,
    NewDeck: NewDeck,
    Quiz: Quiz
  },
  {
    initialRouteName: 'Home'
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
