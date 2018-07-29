import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import { View, Text, Button, StyleSheet } from 'react-native';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import { connect } from 'react-redux';

class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      totalQuestions: 0,
      totalCorrect: 0,
      finished: false
    }
  }

  componentDidMount() {
    this.setState({
      totalQuestions: this.props.questions.length
    });
  }

  handleAnswer = (answer) => {
    if(answer === true) {
      this.setState({
        totalCorrect: this.state.totalCorrect+1
      });
    }

    if(this.state.index === this.state.totalQuestions-1) {
      clearLocalNotification()
       .then(setLocalNotification);

      this.setState({
        finished: true
      });
    }
    else {
      this.setState({
        index: this.state.index+1
      });
    }
  }

  render() {
    const { index } = this.state;

    return (
      <View style={styles.container}>
        <Text>Question {this.state.index+1}/{this.state.totalQuestions}</Text>
        <View>
          { !this.state.finished ?
              <QuizQuestion question={this.props.questions[index]} handleAnswer={this.handleAnswer} />
            : <View>
                <Text style={styles.h1}>Finished. Your score: {((this.state.totalCorrect)/this.state.totalQuestions)*100}%</Text>
                <Button
                  title='Restart Quiz'
                  onPress={() => this.setState({
                    index: 0,
                    totalCorrect: 0,
                    finished: false
                  })}
                />
                <Button
                  title='Back to Deck'
                  onPress={() => this.props.navigation.navigate('Details', {title: this.props.title})}
                />
              </View>
          }
        </View>
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
    marginTop: 5,
    marginBottom: 5
  }
});

function mapStateToProps(state, props) {
  const { navigation } = props;
  const title = navigation.state.params.title;

  return {
    title: title,
    questions: state['decks'][title].questions
  }
}

export default connect(mapStateToProps)(Quiz);
