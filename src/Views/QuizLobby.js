import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomMenu from "../Components/BottomMenu";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import GlobalHeader from "../Components/GlobalHeader";

export function QuizLobby() {
  return (
    <div className="container">
      <GlobalHeader />
      <div className="Show-score QuizItem rounded text-center d-flex flex-column justify-content-center align-items-center">
        <h1>Quiz</h1>
        <div>
          <Link to="/quiz">
            <Button variant="outline-light" className="m-2">
              Spela quiz
            </Button>
          </Link>
          <Link to="/highscore">
            <Button variant="outline-light" className="m-2">
              Highscore
            </Button>
          </Link>
        </div>
      </div>

      <GlobalHeader />
      {/*Komponent för bottenmeny*/}
      <BottomMenu />
    </div>
  );
}

export default QuizLobby;
