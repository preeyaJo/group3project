import React from "react";
import QuizList_a from "./QuizItem_a";
import QuizList_b from "./QuizItem_b";

function QuizListContainer() {
  return (
    <div className="container">
      <QuizList_a />
      <QuizList_b />
    </div>
  );
}

export default QuizListContainer;
