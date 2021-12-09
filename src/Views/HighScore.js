import React, { useState } from "react";
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

  const [highScoreList, sethighScoreList] = useState([
    { name: "Shara, N.", result: 10 },
    { name: "Alexandra, L.", result: 7 },
    { name: "David, G.", result: 8 },
    { name: "Jafar, A.", result: 9 },
  ]);
  //{e => setDetails({...details, userID: e.target.value})} value={details.userID}
  const adScoreContext = () => {
    /*  sethighScoreList({ ...highScoreList, name: "Anna", score: 15 }); */
    console.log(highScoreList);
  };

  const sortedList = highScoreList.sort(function (a, b) {
    if (a.result > b.result) return -1;
  });

  const showHighScore = sortedList.map((post, index) => (
    <li key={index}>
      {post.name} {post.result}/{questionsArray.length}
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
