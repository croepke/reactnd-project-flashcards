import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { saveDeckTitle, clear } from '../utils/api';
import { AsyncStorage } from 'react-native';


class NewDeck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  createCard = () => {
    const { navigate } = this.props.navigation;
    saveDeckTitle(this.state.title);
    navigate('Home');
  }

  render() {
    return (
      <View>
        <Text>New Card</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          value={this.state.title}
          onChangeText={(title) => this.setState({title})}
        />
        <Button
          title='Create Card'
          onPress={this.createCard}
        />
      </View>
    )
  }
}

export default NewDeck;
