import React from "react";
import "../Style/App.css";
import "../Style/quiz.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomMenu from "../Components/BottomMenu";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import GlobalHeader from "../Components/GlobalHeader";

export function QuizLobby() {
  return (
    <div className="container">
      <GlobalHeader />
      <div className="borderPruple Show-score QuizItem rounded text-center text-secondary d-flex flex-column justify-content-center align-items-center">
        <img src="dice-solid.png" alt="A pointy tower" className=" my-3" />
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <Link to="/quiz">
            <Button className="m-2 Btn-quiz">Spela quiz</Button>
          </Link>
          <Link to="/highscore">
            <Button className="m-2 Btn-quiz Btn-quiz--option">Highscore</Button>
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
