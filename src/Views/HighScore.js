import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserScoreContext } from "../App";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import GlobalHeader from "../Components/GlobalHeader";
import BottomMenu from "../Components/BottomMenu";

export function HighScore() {
  const { scoreContext } = React.useContext(UserScoreContext);

  return (
    <div className="container text-secondary">
      <GlobalHeader />
      <div className="Show-score QuizItem rounded text-center d-flex flex-column justify-content-center align-items-center">
        <h1>Highscore</h1>
        <div className="p-3 d-flex justify-content-center align-items-center">
          <span>Ditt senaste resultat</span>
          <span className="p-3 h1 mb-0">{scoreContext}</span>
        </div>
        <div>
          <Link to="/quiz">
            <Button variant="outline-secondary m-2">Spela quiz</Button>
          </Link>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
}

export default HighScore;
