import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

class QuizQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showQuestion: true
    }
  }

  flipCard = () => {
    this.setState({
      showQuestion: !this.state.showQuestion
    })
  }

  handleAnswer = (answer) => {
    this.setState({
      showQuestion: true
    })
    this.props.handleAnswer(answer);
  }

  render() {
    const { showQuestion } = this.state;
    const { question } = this.props;
    const title = showQuestion ? 'Q: ' + question.question : 'A: ' + question.answer;
    const show = showQuestion ? 'Show answer' : 'Show question';

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>{title}</Text>
        <Button
          title={show}
          onPress={this.flipCard}
        />
        { !showQuestion ?
          <View style={styles.buttonContainer}>
            <Text style={styles.h2}>Was your answer correct?</Text>
            <TouchableHighlight style={styles.buttonSuccess}>
              <Button
                title='Yes'
                color='white'
                onPress={() => this.handleAnswer(true)}
              />
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonFalse}>
              <Button
                title='No'
                color='white'
                onPress={() => this.handleAnswer(false)}
              />
            </TouchableHighlight>
          </View>
        : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center'
  },
  h2: {
    fontSize: 18,
    marginBottom: 20
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20
  },
  buttonSuccess: {
    width: 100,
    marginBottom: 20,
    backgroundColor: 'green'
  },
  buttonFalse: {
    width: 100,
    backgroundColor: 'red'
  },
  h1: {
    fontSize: 24,
    marginBottom: 5
  }
});

export default connect()(QuizQuestion);
