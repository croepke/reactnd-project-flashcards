import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckListView from './components/DeckListView';
import DeckView from './components/DeckView';
import NewQuestion from './components/NewQuestion';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: DeckListView,
    Details: DeckView,
    NewQuestion: NewQuestion,
    
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
