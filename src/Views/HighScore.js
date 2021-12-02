import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import GlobalHeader from "../Components/GlobalHeader";
import BottomMenu from "../Components/BottomMenu";

export function HighScore() {
  return (
    <div className="container">
      <GlobalHeader />
      <div className="Show-score QuizItem rounded text-center d-flex flex-column justify-content-center align-items-center">
        <h1>Highscore</h1>
        <div>
          <Link to="/quiz">
            <Button variant="outline-light m-2">Spela quiz</Button>
          </Link>
          <Link to="/cctopics">
            <Button variant="outline-light m-2">Lär om klimat</Button>
          </Link>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
}

export default HighScore;
