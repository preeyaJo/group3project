import React from "react";
import data from "./questions.json";

function QuizList() {
  return data.map((post, index) => (
    <div className="QuizItem rounded m-3 p-2" key={index}>
      <h2>Fråga {index + 1}</h2>
      <p>{post.alt1}</p>
      <p>{post.alt2}</p>
      <p>{post.alt3}</p>
    </div>
  ));
}

export default QuizList;
