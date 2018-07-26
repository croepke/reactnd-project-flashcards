import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

class NewQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: 'Some question',
      answer: ''
    }
  }

  createCard = () => {

  }

  render() {
    return (
      <View>
        <Text>New Question</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
        />
        <Button
          title='Create Card'
          onPress={this.createCard}
        />
      </View>
    )
  }
}

export default NewQuestion;
