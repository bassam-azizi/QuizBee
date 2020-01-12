import React, { Component } from "react";
import "./assets/style.css";
import quizService from "./quizServices";
import QuestionBox from "./component/questionBox";
import Result from "./component/result";

class App extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };

  getQuestion = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    console.log(this.state.score);
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });
    console.log(this.state.responses);
  };

  componentDidMount() {
    this.getQuestion();
  }

  resetGame = () => {
    this.getQuestion();
    this.setState({ score: 0, responses: 0 });
  };

  render() {
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                key={questionId}
                question={question}
                options={answers}
                selected={answer => this.computeAnswer(answer, correct)}
              />
            )
          )}
        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.resetGame} />
        ) : null}
      </div>
    );
  }
}

export default App;
