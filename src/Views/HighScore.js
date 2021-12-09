import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserScoreContext } from "../App";
import questionsArray from "../Quiz/questions_a.json";

import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import GlobalHeader from "../Components/GlobalHeader";
import BottomMenu from "../Components/BottomMenu";

export function HighScore() {
  const { scoreContext } = React.useContext(UserScoreContext);
  

  const highScoreList = 
    [
      {name: "Shara, N.", result: 10},
      {name: "David, G.", result: 8},
      {name: "Jafar, A.", result: 9},
      {name: "Alexandra, L.", result: 7}
    ];

    const showHighScore = highScoreList.map((highScoreList, index) => (
      <li key={index}>
        {highScoreList.name} {highScoreList.result}/{questionsArray.length}
      </li>
    ));
  

  return (
    <div className="container">
      <GlobalHeader />
      <div className="Show-score QuizItem rounded text-center text-secondary d-flex flex-column justify-content-center align-items-center">
        <h1>Highscore</h1>
        <div className="p-3 d-flex justify-content-center align-items-center">
          <span>Ditt senaste resultat</span>
          <span className="p-3 h1 mb-0">{scoreContext}</span>
        </div>
        {showHighScore}
        <div>
          <Link to="/quiz">
            <Button variant="outline-secondary" className="m-2 Btn-quiz">
              Spela quiz
            </Button>
          </Link>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
}

export default HighScore;
