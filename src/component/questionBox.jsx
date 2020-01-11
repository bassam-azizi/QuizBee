import React, { useState } from "react";

const QuestionBox = ({ question, options }) => {
  const [answers, setAnswers] = useState(options);

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answers.map((answer, index) => (
        <button
          className="answerBtn"
          key={index}
          onClick={() => setAnswers([answer])}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
