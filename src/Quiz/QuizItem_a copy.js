import React, { useState } from "react";
/* import { InputGroup, FormControl } from "react-bootstrap"; */
import { Button } from "react-bootstrap";
import data from "./questions_a.json";

function QuizList_a() {
  const nrOfQuestions = data.length;

  return data.map((post, index) => (
    <div className=" row QuizItem rounded p-4 mx-1 my-2" key={index}>
      <h2>
        Fråga {index + 1} av {nrOfQuestions}
      </h2>
      <div className="col">
        <p>{post.questionText}</p>
      </div>
      <div className="col-4 col-md-5 d-flex flex-column justify-content-center ">
        {post.answerOptions.map((answerOption) => (
          <Button variant="outline-light" className="m-1">
            {answerOption.answerText}
          </Button>
        ))}
      </div>
    </div>
  ));
}

export default QuizList_a;

/*         <Button variant="outline-light" className="m-1">
          {post.answerOptions.answerText}
        </Button>
        <Button variant="outline-light" className="m-1">
          {post.alt2}
        </Button>
        <Button variant="outline-light" className="m-1">
          {post.alt3}
        </Button> */
