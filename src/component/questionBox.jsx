import React,{useState} from "react";

const QuestionBox = ({ question, answers }) => {
  const [answer, setAnswear]
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
    </div>
  );
};

export default QuestionBox;
