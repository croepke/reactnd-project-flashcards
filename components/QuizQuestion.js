import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

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
    const title = showQuestion ? question.question : question.answer;
    const show = showQuestion ? 'Show answer' : 'Show question';

    return (
      <View>
        <Text>{title}</Text>
        <Button
          title={show}
          onPress={this.flipCard}
        />
        { !showQuestion ?
          <View>
            <Button
              title='Yes'
              onPress={() => this.handleAnswer(true)}
            />
            <Button
              title='No'
              onPress={() => this.handleAnswer(false)}
            />
          </View>
        : null
        }
      </View>
    )
  }
}

export default connect()(QuizQuestion);
