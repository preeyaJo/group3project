import React from "react";
import PostData from "./questions.json";

function QuizList() {
  return PostData.map((post, index) => (
    <div className="bg-secondary rounded m-3 p-3" key={index}>
      <h2 className="">
        Fråga {index} om {post.name}
      </h2>
      <p>Lorem ipsum dolor sit.</p>
    </div>
  ));
}

export default QuizList;
