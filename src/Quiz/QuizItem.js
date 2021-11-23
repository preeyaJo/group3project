import React from "react";
/* import { InputGroup, FormControl } from "react-bootstrap"; */
import { Button } from "react-bootstrap";
import data from "./questions.json";

function QuizList() {
  return data.map((post, index) => (
    <div className=" row QuizItem rounded p-1 m-2" key={index}>
      <div className="col">
        <h2>Fråga {post.id}</h2>
        <p>{post.question}</p>
      </div>
      <div className="col col-md-8 d-flex justify-content-center align-items-center">
        <div>
          {/*           <Button variant="outline-light btn-sm" className="m-2">
            Alternativ 1
          </Button>
          <Button variant="outline-light btn-sm" className="m-2">
            Alternativ 2
          </Button>
          <Button variant="outline-light btn-sm" className="m-2">
            Alternativ 3
          </Button>
          <Button variant="outline-light btn-sm" className="m-2">
            Alternativ 3
          </Button> */}
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
