import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizQuestion from './QuizQuestion';
import { View, Text, Button } from 'react-native';

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
    })
  }

  handleAnswer = (answer) => {
    if(answer === true) {
      this.setState({
        totalCorrect: this.state.totalCorrect+1
      })
    }

    if(this.state.index === this.state.totalQuestions-1) {
      this.setState({
        finished: true
      })
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
      <View>
        <Text>{this.state.index+1}/{this.state.totalQuestions}</Text>
        <View>
          { !this.state.finished ?
              <QuizQuestion question={this.props.questions[index]} handleAnswer={this.handleAnswer} />
            : <Text>Finished. Your score: {((this.state.totalCorrect)/this.state.totalQuestions)*100}%</Text>
          }
        </View>
      </View>
    )
  }
}

function mapStateToProps(state, props) {
  const { navigation } = props;
  const title = navigation.state.params.title;

  return {
    title: title,
    questions: state['decks'][title].questions
  }
}

export default connect(mapStateToProps)(Quiz);
