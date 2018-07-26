import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Text,
  Button,
  List,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { saveDeckTitle, getDecks } from '../utils/api';
import { handleReceiveDecks } from '../actions/index';

class DeckListView extends Component {

  componentDidMount() {
    this.props.dispatch(handleReceiveDecks());
  }

  _keyExtractor = (item) => item.title;

  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.listItem}>
        <TouchableOpacity onPress={() => navigate('Details', {
          item
        })}>
          <Text>{item.title}</Text>
          <Text>{item.questions.length}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Your decks</Text>
        <FlatList
          data={this.props.decks}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />
        <Button title='Add Deck' onPress={() => navigate('NewDeck')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  h1: {
    fontSize: 24,
    textAlign: 'center'
  },
  listItem: {
    justifyContent:'center',
    backgroundColor: 'grey',
    borderWidth: 1,
    height: 100
  }
});

function mapStateToProps(state) {
  return {
    decks: Object.values(state.decks)
  }
}

export default connect(mapStateToProps)(DeckListView);
