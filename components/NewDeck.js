import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { handleSaveDeck } from '../actions/index';
import { clear} from '../utils/api';
import { connect } from 'react-redux';

class NewDeck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  createCard = () => {
    const { navigate } = this.props.navigation;
    this.props.dispatch(handleSaveDeck(this.state.title))
      .then(() => {
          navigate('Details', { title: this.state.title });
      });

    //clear()
    ;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1} >New Deck</Text>
        <TextInput
          style={styles.input}
          value={this.state.title}
          placeholder='Enter deck name'
          onChangeText={(title) => this.setState({title})}
        />
        <Button
          title='Create Deck'
          onPress={this.createCard}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center'
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

export default connect()(NewDeck);
