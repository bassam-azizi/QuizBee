import React, { Component } from "react";
import "./assets/style.css";
import quizService from "./quizServices";
import QuestionBox from "./component/questionBox";

class App extends Component {
  state = {
    questionBank: []
  };

  getQuestion = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };

  componentDidMount() {
    console.log(this.state.questionBank);
    this.getQuestion();
  }

  render() {
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                correct={correct}
                key={questionId}
              />
            )
          )}
      </div>
    );
  }
}

export default App;
