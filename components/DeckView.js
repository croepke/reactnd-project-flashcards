import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends Component {

  addCard = () => {
    const { navigation }  = this.props;
    const title = this.props.title;
    navigation.navigate('NewQuestion', { title });
  }

  startQuiz = () => {
    const { navigation }  = this.props;
    const title = this.props.title;
    navigation.navigate('Quiz', { title });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>{this.props.title}</Text>
        <Text>{this.props.questions.length} card(s)</Text>
        <Button title='Add Card' onPress={this.addCard} />
        {
          this.props.questions.length >0 ?
            <Button title='Start quiz' onPress={this.startQuiz}/>
            : null
        }
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
    fontSize: 24
  }
});

function mapStateToProps(state, props) {
  return {
    title: props.navigation.state.params.title,
    questions: state['decks'][props.navigation.state.params.title].questions
  }
}

export default connect(mapStateToProps)(DeckView);
