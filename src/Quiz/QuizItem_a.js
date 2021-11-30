import React, { useState } from "react";
/* import { InputGroup, FormControl } from "react-bootstrap"; */
import { Button } from "react-bootstrap";
import data from "./questions_a.json";

function QuizList_a() {
  const nrOfQuestions = data.length;

  return (
    <div className="QuizItem rounded p-4 mx-1 my-2">
      <h2>Fråga 1 av {nrOfQuestions}</h2>
      <div className="py-3">
        <p>{data[0].questionText}</p>
      </div>
      <div className="d-flex flex-column justify-content-center ">
        {data[0].answerOptions.map((answerOption, index) => (
          <Button variant="outline-light" className="m-1" key={index}>
            {answerOption.answerText}
          </Button>
        ))}
      </div>
    </div>
  );
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
