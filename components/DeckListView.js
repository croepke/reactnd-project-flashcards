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
import { saveDeckTitle, getDecks, clear } from '../utils/api';
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
          title: item.title
        })}>
          <Text style={styles.h2}>{item.title}</Text>
          <Text>{item.questions.length} card(s)</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Your decks</Text>
        <Button title='Add Deck' onPress={() => navigate('NewDeck')} />
        <FlatList
          data={this.props.decks}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 50
  },
  h1: {
    fontSize: 24,
    textAlign: 'center'
  },
  h2: {
    fontSize: 16
  },
  listItem: {
    justifyContent:'center',
    backgroundColor: 'white',
    marginBottom: 5,
    paddingLeft: 20,
    borderColor: 'gray',
    height: 100
  }
});

function mapStateToProps(state) {
  return {
    decks: Object.values(state.decks)
  }
}

export default connect(mapStateToProps)(DeckListView);
