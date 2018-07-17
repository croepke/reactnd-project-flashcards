import React, { Component } from 'react';
import {
  View,
  Text,
  List,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class DeckListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        { title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      ]
    }
  }

  _keyExtractor = (item) => item.title;

  renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity>
          <Text>{item.title}</Text>
          <Text>{item.questions.length}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Your decks</Text>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />
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
export default DeckListView;
