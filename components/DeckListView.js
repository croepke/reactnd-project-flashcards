import React, { Component } from 'react';
import { View, Text, List, FlatList } from 'react-native';

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

  renderItem = ({ item }) => {
    return (
      <Text>{item.title}</Text>
    )
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
        />
      </View>
    )
  }

}

export default DeckListView;
