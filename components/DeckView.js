import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class DeckView extends Component {

  addCard = () => {
    this.props.navigation.navigate('NewQuestion');
  }

  startQuiz = () => {

  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 24}}>{this.props.navigation.getParam('item').title}</Text>
        <Text>{this.props.navigation.getParam('item').questions.length} cards</Text>
        <Button title='Add Card' onPress={this.addCard} />
        <Button title='Start quiz' onPress={this.startQuiz}/>
      </View>
    )
  }
}

export default DeckView;
