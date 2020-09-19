import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import quizService from './quizService'
import './assets/style.css'
class QuizBee extends Component {
  state = {
    questionBank: [],
  }
  getQuestions = () => {
    quizService().then((question) => {
      this.setState(() => {
        return {
          questionBank: question,
        }
      })
    })
  }
  componentDidMount() {
    this.getQuestions()
  }
  render() {
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => {
              return <h4>{question}</h4>
            },
          )}
      </div>
    )
  }
}
ReactDOM.render(<QuizBee />, document.getElementById('root'))
