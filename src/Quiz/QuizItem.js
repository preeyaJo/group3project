import React from "react";
/* import { InputGroup, FormControl } from "react-bootstrap"; */
import { Button } from "react-bootstrap";
import data from "./questions.json";

function QuizList() {
  return data.map((post, index) => (
    <div className=" row QuizItem rounded p-1 m-2" key={index}>
      <h2>Fråga {post.id}</h2>
      <div className="col">
        <p>{post.question}</p>
      </div>
      <div className="col col-md-8 d-flex justify-content-center ">
        <div>
          {post.answers.map((a) => (
            <div>
              <p>{a.alt1}</p>
              <p>{a.alt2}</p>
              <p>{a.alt3}</p>
            </div>
          ))}
        </div>

        {/*         <InputGroup className="mb-3">
                    <Button variant="outline-light">Alt 1</Button>
                    <Button variant="outline-light">Alt 2</Button>
                    <Button variant="outline-light">Alt 3</Button>
                  </InputGroup> */}
      </div>
    </div>
  ));
}

export default QuizList;
