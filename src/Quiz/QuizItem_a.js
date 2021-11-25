import React from "react";
/* import { InputGroup, FormControl } from "react-bootstrap"; */
import { Button } from "react-bootstrap";
import data from "./questions_a.json";

function QuizList_a() {
  return data.map((post, index) => (
    <div className=" row QuizItem rounded p-4 m-2" key={index}>
      <h2>Fråga {post.id}</h2>
      <div className="col">
        <p>{post.question}</p>
      </div>
      <div className="col-4 col-md-5 d-flex flex-column justify-content-center align-items-center">
        <Button variant="outline-light" className="m-1">
          {post.alt1}
        </Button>
        <Button variant="outline-light" className="m-1">
          {post.alt2}
        </Button>
        <Button variant="outline-light" className="m-1">
          {post.alt3}
        </Button>
      </div>
    </div>
  ));
}

export default QuizList_a;
