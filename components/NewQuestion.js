import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { handleAddCard } from '../actions/index';
import { connect } from 'react-redux';

class NewQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
  }

  createCard = () => {
    const { dispatch } = this.props;
    const { question, answer } = this.state;
    const { navigation } = this.props;

    const obj = {
      title: navigation.getParam('title'),
      card: {
        question,
        answer
      }
    }
    dispatch(handleAddCard(obj));
    navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>New Question</Text>
        <TextInput
          placeholder='Enter the question'
          style={styles.input}
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
        />
        <TextInput
          placeholder='Enter the answer'
          style={styles.input}
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

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  h1: {
    fontSize: 24,
    marginBottom: 5
  },
  input: {
    width: '99%',
    height: 60,
    marginBottom: 5,
    backgroundColor: 'white'
  }
});

export default connect()(NewQuestion);
